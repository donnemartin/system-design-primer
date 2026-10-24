import json
import sqlite3
import sys
import tempfile
import unittest
import zipfile
from unittest.mock import patch
from pathlib import Path

from tools.localize_anki_media import (
    field_checksum,
    localize_deck,
    main,
    resolve_local_asset,
    rewrite_media_html,
)


class MediaResolutionTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.asset_dir = Path(self.temp_dir.name)
        (self.asset_dir / "h81n9iK.png").write_bytes(b"png")
        (self.asset_dir / "preferred.png").write_bytes(b"preferred")

    def tearDown(self):
        self.temp_dir.cleanup()

    def test_resolves_camo_hex_origin(self):
        origin = "http://i.imgur.com/h81n9iK.png"
        camo = "https://camo.githubusercontent.com/signature/" + origin.encode().hex()
        self.assertEqual(
            resolve_local_asset(camo, None, self.asset_dir),
            self.asset_dir / "h81n9iK.png",
        )

    def test_canonical_url_takes_precedence(self):
        origin = "http://i.imgur.com/missing.png"
        camo = "https://camo.githubusercontent.com/signature/" + origin.encode().hex()
        self.assertEqual(
            resolve_local_asset(camo, "https://i.imgur.com/preferred.png", self.asset_dir),
            self.asset_dir / "preferred.png",
        )

    def test_canonical_url_after_src_takes_precedence(self):
        origin = "http://i.imgur.com/missing.png"
        camo = "https://camo.githubusercontent.com/signature/" + origin.encode().hex()
        rewritten, _ = rewrite_media_html(
            f'<img src="{camo}" data-canonical-src="https://i.imgur.com/preferred.png">',
            lambda url, canonical: (
                resolve_local_asset(url, canonical, self.asset_dir).name
                if resolve_local_asset(url, canonical, self.asset_dir)
                else None
            ),
            lambda _: None,
        )
        self.assertEqual(
            rewritten,
            '<img src="preferred.png" data-canonical-src="https://i.imgur.com/preferred.png">',
        )

    def test_resolves_direct_imgur_url(self):
        self.assertEqual(
            resolve_local_asset("https://i.imgur.com/h81n9iK.png", None, self.asset_dir),
            self.asset_dir / "h81n9iK.png",
        )

    def test_rewrites_media_sources_but_not_anchor_links(self):
        origin = "http://i.imgur.com/h81n9iK.png"
        camo = "https://camo.githubusercontent.com/signature/" + origin.encode().hex()
        unresolved = "https://example.invalid/missing.png"
        html = (
            f'<a href="{camo}"><img src="{camo}"></a>'
            f"<video src='{camo}'></video><source src=\"{unresolved}\">"
        )
        registered = []

        rewritten, missing = rewrite_media_html(
            html,
            lambda url, canonical: (
                resolve_local_asset(url, canonical, self.asset_dir).name
                if resolve_local_asset(url, canonical, self.asset_dir)
                else None
            ),
            registered.append,
        )

        self.assertIn(f'href="{camo}"', rewritten)
        self.assertIn('src="h81n9iK.png"', rewritten)
        self.assertIn("src='h81n9iK.png'", rewritten)
        self.assertIn(f'src="{unresolved}"', rewritten)
        self.assertEqual(registered, ["h81n9iK.png", "h81n9iK.png"])
        self.assertEqual(missing, [unresolved])

    def test_handles_html_entities_and_single_quoted_attributes(self):
        url = "https://i.imgur.com/h81n9iK.png?a=1&amp;b=2"
        registered = []
        rewritten, missing = rewrite_media_html(
            f"<img data-canonical-src='https://i.imgur.com/h81n9iK.png' src='{url}'>",
            lambda value, canonical: (
                resolve_local_asset(value, canonical, self.asset_dir).name
                if resolve_local_asset(value, canonical, self.asset_dir)
                else None
            ),
            registered.append,
        )
        self.assertEqual(rewritten, "<img data-canonical-src='https://i.imgur.com/h81n9iK.png' src='h81n9iK.png'>")
        self.assertEqual(missing, [])

    def test_reports_unresolved_media_without_changing_it(self):
        url = "https://example.invalid/missing.png"
        registered = []
        rewritten, missing = rewrite_media_html(
            f'<img src="{url}">', lambda value, canonical: None, registered.append
        )
        self.assertEqual(rewritten, f'<img src="{url}">')
        self.assertEqual(missing, [url])
        self.assertEqual(registered, [])


class DeckLocalizationTests(unittest.TestCase):
    def test_localizes_archive_and_preserves_unresolved_media(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            assets = root / "assets"
            assets.mkdir()
            (assets / "h81n9iK.png").write_bytes(b"png-data")
            source = root / "source.apkg"
            output = root / "output.apkg"
            self._create_fixture_deck(source)

            report = localize_deck(source, assets, output)

            self.assertEqual(report.original_note_count, 1)
            self.assertEqual(report.final_note_count, 1)
            self.assertEqual(report.localized_filenames, ["h81n9iK.png"])
            self.assertEqual(report.unresolved_urls, ["https://example.invalid/missing.png"])

            with zipfile.ZipFile(output) as archive:
                self.assertEqual(
                    set(archive.namelist()),
                    {"collection.anki2", "media", "0", "extra.txt"},
                )
                self.assertEqual(json.loads(archive.read("media")), {"h81n9iK.png": "0"})
                self.assertEqual(archive.read("extra.txt"), b"preserve me")
                database = root / "checked.anki2"
                database.write_bytes(archive.read("collection.anki2"))
                self.assertEqual(archive.read("0"), b"png-data")

            connection = sqlite3.connect(database)
            self.assertEqual(connection.execute("PRAGMA quick_check").fetchone()[0], "ok")
            self.assertEqual(connection.execute("SELECT COUNT(*) FROM cards").fetchone()[0], 1)
            fields, checksum = connection.execute("SELECT flds, csum FROM notes").fetchone()
            self.assertIn('src="h81n9iK.png"', fields)
            self.assertIn("https://example.invalid/missing.png", fields)
            self.assertEqual(checksum, field_checksum(fields.split("\x1f", 1)[0]))
            connection.close()

    def test_cli_requires_output_for_non_in_place_deck(self):
        with tempfile.TemporaryDirectory() as directory:
            input_deck = Path(directory) / "input.apkg"
            input_deck.touch()
            with patch.object(
                sys,
                "argv",
                ["localize_anki_media.py", "--deck", str(input_deck), "--assets", "images"],
            ):
                with self.assertRaisesRegex(SystemExit, "--output is required"):
                    main()

    def test_rejects_unsafe_archive_member(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            source = root / "unsafe.apkg"
            output = root / "output.apkg"
            with zipfile.ZipFile(source, "w") as archive:
                archive.writestr("../escape", "bad")
            with self.assertRaisesRegex(ValueError, "unsafe archive member"):
                localize_deck(source, root, output)

    @staticmethod
    def _create_fixture_deck(path):
        with tempfile.TemporaryDirectory() as directory:
            database = Path(directory) / "collection.anki2"
            connection = sqlite3.connect(database)
            connection.execute("CREATE TABLE notes (id integer primary key, guid text, mid integer, mod integer, usn integer, tags text, flds text, sflg integer, csum integer, flags integer, data text)")
            connection.execute("CREATE TABLE cards (id integer primary key, nid integer, did integer, ord integer)")
            fields = '<img src="https://i.imgur.com/h81n9iK.png">\x1f<img src="https://example.invalid/missing.png">'
            connection.execute("INSERT INTO notes VALUES (1, 'guid', 1, 0, 0, '', ?, 0, 0, 0, '')", (fields,))
            connection.execute("INSERT INTO cards VALUES (1, 1, 1, 0)")
            connection.commit()
            connection.close()
            with zipfile.ZipFile(path, "w") as archive:
                archive.write(database, "collection.anki2")
                archive.writestr("media", "{}")
                archive.writestr("extra.txt", "preserve me")


if __name__ == "__main__":
    unittest.main()
