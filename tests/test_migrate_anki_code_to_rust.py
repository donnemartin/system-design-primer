import json
import sqlite3
import tempfile
import unittest
import zipfile
from pathlib import Path

from tools.migrate_anki_code_to_rust import (
    apply_inventory_replacements,
    extract_code_candidates,
    extract_deck_notes,
    field_checksum,
    highlight_rust_html,
    validate_migrated_deck,
    write_inventory,
)


class MigrationExtractionTests(unittest.TestCase):
    def make_deck(self, root: Path) -> Path:
        database = root / "collection.anki2"
        connection = sqlite3.connect(database)
        connection.executescript(
            """
            CREATE TABLE notes (id INTEGER PRIMARY KEY, guid TEXT, mid INTEGER, mod INTEGER,
                usn INTEGER, tags TEXT, flds TEXT, sfld TEXT, csum TEXT, flags INTEGER, data TEXT);
            CREATE TABLE cards (id INTEGER PRIMARY KEY, nid INTEGER, did INTEGER, ord INTEGER,
                mod INTEGER, usn INTEGER, type INTEGER, queue INTEGER, due INTEGER, ivl INTEGER,
                factor INTEGER, reps INTEGER, lapses INTEGER, left INTEGER, odue INTEGER,
                odid INTEGER, flags INTEGER, data TEXT);
            CREATE TABLE decks (id INTEGER PRIMARY KEY, name TEXT);
            CREATE TABLE models (id INTEGER PRIMARY KEY, name TEXT);
            """
        )
        first = '<p>Example:</p><pre class="language-python"><code><span>print(&amp;quot;hi&amp;quot;)</span></code></pre><p><a href="https://example.com">link</a><img src="local.png"></p>'
        fields = first + "\x1f" + "SQL: SELECT * FROM users;"
        connection.execute(
            "INSERT INTO notes VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (1, "guid", 1, 0, 0, "", fields, first, field_checksum(first), 0, ""),
        )
        connection.execute("INSERT INTO cards VALUES (1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '')")
        connection.execute("INSERT INTO decks VALUES (1, 'Default')")
        connection.execute("INSERT INTO models VALUES (1, 'Basic')")
        connection.commit()
        connection.close()
        deck = root / "fixture.apkg"
        with zipfile.ZipFile(deck, "w") as archive:
            archive.write(database, "collection.anki2")
            archive.writestr("media", "{}")
            archive.writestr("local.png", b"image")
        return deck

    def test_highlights_rust_code_inside_code_element(self):
        highlighted = highlight_rust_html('fn main() { println!("hi"); // comment\n}')
        self.assertIn('<code class="language-rust">', highlighted)
        self.assertIn('class="rust-keyword"', highlighted)
        self.assertIn('class="rust-string"', highlighted)
        self.assertIn('class="rust-comment"', highlighted)

    def test_extracts_code_candidates_and_preserves_boundaries(self):
        with tempfile.TemporaryDirectory() as directory:
            deck = self.make_deck(Path(directory))
            snapshot = extract_deck_notes(deck)
            candidates = extract_code_candidates(snapshot)

        self.assertEqual(snapshot.note_count, 1)
        self.assertEqual(len(candidates), 2)
        programming, sql = candidates
        self.assertEqual(programming.classification, "convert")
        self.assertEqual(programming.language, "python")
        self.assertIn("print", programming.source_text)
        self.assertEqual(sql.classification, "exclude")
        self.assertIn('href="https://example.com"', snapshot.notes[0].fields[0])
        self.assertIn('src="local.png"', snapshot.notes[0].fields[0])

    def test_replaces_multiple_code_blocks_in_one_field(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            source = self.make_deck(root)
            snapshot = extract_deck_notes(source)
            original = snapshot.notes[0].fields[0]
            second = '<pre class="language-python"><code>print(&amp;quot;bye&amp;quot;)</code></pre>'
            database_dir = root / "db"
            database_dir.mkdir()
            with zipfile.ZipFile(source) as archive:
                archive.extract("collection.anki2", database_dir)
            database = database_dir / "collection.anki2"
            connection = sqlite3.connect(database)
            fields = original.replace("</p>", "</p>" + second, 1)
            connection.execute("UPDATE notes SET flds = ?, sfld = ?, csum = ? WHERE id = ?", (fields + "\x1fSQL: SELECT 1", fields, field_checksum(fields), 1))
            connection.commit()
            connection.close()
            rebuilt = root / "two.apkg"
            with zipfile.ZipFile(rebuilt, "w") as archive:
                archive.write(database, "collection.anki2")
                archive.writestr("media", "{}")
                archive.writestr("local.png", b"image")
            candidates = extract_code_candidates(extract_deck_notes(rebuilt))
            entries = []
            for candidate, replacement in zip(candidates, ['fn main() { println!("hi"); }', 'fn bye() {}']):
                item = candidate.__dict__.copy()
                item["rust_replacement"] = replacement
                item["validation_status"] = "compiled"
                entries.append(item)
            output = root / "output.apkg"
            apply_inventory_replacements(rebuilt, entries, output)
            changed = extract_deck_notes(output).notes[0].fields[0]
            self.assertIn('class="language-rust"', changed)
            self.assertIn("main()", changed)
            self.assertIn("bye()", changed)

    def test_applies_only_approved_code_and_validates_archive(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            source = self.make_deck(root)
            snapshot = extract_deck_notes(source)
            candidate = extract_code_candidates(snapshot)[0]
            entry = {
                "deck_path": str(source), "note_id": candidate.note_id,
                "field_index": candidate.field_index, "snippet_id": candidate.snippet_id,
                "source_html": candidate.source_html, "source_text": candidate.source_text,
                "language": candidate.language, "classification": "convert",
                "rust_replacement": 'fn main() { println!("hi"); }',
                "validation_status": "compiled", "notes": "",
            }
            output = root / "output.apkg"
            apply_inventory_replacements(source, [entry], output)
            validate_migrated_deck(source, output, [entry])
            changed = extract_deck_notes(output).notes[0].fields[0]
            self.assertIn('class="language-rust"', changed)
            self.assertIn('main()', changed)
            self.assertIn('href="https://example.com"', changed)
            self.assertIn('src="local.png"', changed)

    def test_every_convert_inventory_entry_has_utf8_replacement(self):
        inventory_path = Path("docs/superpowers/rust-flashcard-code-inventory.json")
        inventory = json.loads(inventory_path.read_text(encoding="utf-8"))
        converted = [entry for entry in inventory if entry["classification"] == "convert"]
        self.assertEqual(len(converted), 29)
        for entry in converted:
            replacement = entry["rust_replacement"]
            self.assertIsInstance(replacement, str)
            self.assertTrue(replacement)
            replacement.encode("utf-8")

    def test_inventory_is_deterministic_json(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            deck = self.make_deck(root)
            inventory_path = root / "inventory.json"
            candidates = extract_code_candidates(extract_deck_notes(deck))
            write_inventory(candidates, inventory_path)
            payload = json.loads(inventory_path.read_text())

        self.assertEqual([entry["snippet_id"] for entry in payload], ["fixture-1-0-0", "fixture-1-1-0"])
        self.assertIsNone(payload[0]["rust_replacement"])
        self.assertEqual(payload[1]["classification"], "exclude")


if __name__ == "__main__":
    unittest.main()
