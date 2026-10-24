"""Inventory, rewrite, and validate programming code inside Anki decks."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import shutil
import sqlite3
import tempfile
import zipfile
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable

FIELD_SEPARATOR = "\x1f"
CODE_BLOCK_RE = re.compile(r"<pre\b[^>]*>(?P<body>.*?)</pre>", re.IGNORECASE | re.DOTALL)
INLINE_CODE_RE = re.compile(r"<code\b[^>]*>(?P<body>.*?)</code>", re.IGNORECASE | re.DOTALL)
TAG_RE = re.compile(r"<[^>]+>")
LANGUAGE_RE = re.compile(r"(?:language|lang|highlight)[-_]([a-zA-Z0-9+#-]+)", re.IGNORECASE)


@dataclass(frozen=True)
class NoteSnapshot:
    note_id: int
    fields: tuple[str, ...]
    checksum: str


@dataclass(frozen=True)
class DeckSnapshot:
    deck_path: Path
    notes: tuple[NoteSnapshot, ...]
    note_count: int
    card_count: int
    deck_count: int
    model_count: int
    members: tuple[str, ...]
    media_manifest: dict[str, str]


@dataclass(frozen=True)
class CodeCandidate:
    deck_path: str
    note_id: int
    field_index: int
    snippet_id: str
    source_html: str
    source_text: str
    language: str | None
    classification: str
    rust_replacement: str | None = None
    validation_status: str = "pending"
    notes: str = ""
    occurrence: int = 0
    start: int = 0
    end: int = 0


def field_checksum(first_field: str) -> int:
    return int(hashlib.sha1(first_field.encode("utf-8")).hexdigest()[:8], 16)


def _read_archive(deck_path: Path) -> tuple[Path, list[str], dict[str, str]]:
    temp_dir = Path(tempfile.mkdtemp(prefix="anki-rust-")).resolve()
    try:
        with zipfile.ZipFile(deck_path) as archive:
            for member in archive.infolist():
                target = (temp_dir / member.filename).resolve()
                if target != temp_dir and temp_dir not in target.parents:
                    raise ValueError(f"unsafe archive member: {member.filename}")
                archive.extract(member, temp_dir)
        database = temp_dir / "collection.anki2"
        if not database.exists():
            raise ValueError("archive missing collection.anki2")
        manifest_path = temp_dir / "media"
        manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
        return temp_dir, [member.filename for member in zipfile.ZipFile(deck_path).infolist()], manifest
    except Exception:
        shutil.rmtree(temp_dir, ignore_errors=True)
        raise


def extract_deck_notes(deck_path: Path) -> DeckSnapshot:
    temp_dir, members, manifest = _read_archive(deck_path)
    try:
        connection = sqlite3.connect(temp_dir / "collection.anki2")
        notes = tuple(
            NoteSnapshot(note_id=row[0], fields=tuple(row[1].split(FIELD_SEPARATOR)), checksum=row[2])
            for row in connection.execute("SELECT id, flds, csum FROM notes ORDER BY id")
        )
        counts = {}
        for table in ("notes", "cards", "decks", "models"):
            try:
                counts[table] = connection.execute(f"SELECT COUNT(*) FROM {table}").fetchone()[0]
            except sqlite3.OperationalError:
                counts[table] = 0
        connection.close()
        return DeckSnapshot(
            deck_path=deck_path,
            notes=notes,
            note_count=counts["notes"],
            card_count=counts["cards"],
            deck_count=counts["decks"],
            model_count=counts["models"],
            members=tuple(sorted(members)),
            media_manifest=manifest,
        )
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)


def _visible_text(value: str) -> str:
    return html.unescape(TAG_RE.sub("", value)).strip()


def _language(fragment: str) -> str | None:
    match = LANGUAGE_RE.search(fragment)
    if match:
        return match.group(1).lower()
    visible = _visible_text(fragment)
    prefix = re.match(r"(?is)^\s*(sql|json|yaml|shell|bash)\s*[:：]", visible)
    if prefix:
        return prefix.group(1).lower()
    if re.search(r"(?m)^(?:%%writefile\b|(?:from|import)\s+\w+|class\s+\w+|def\s+\w+)|\b(?:yield|self\.)\b", visible):
        return "python"
    return None


def _classification(language: str | None, source_text: str) -> tuple[str, str]:
    lowered = source_text.lower().strip()
    if language in {"sql", "json", "yaml", "yml", "html", "xml", "shell", "bash", "sh", "通用"}:
        return "exclude", "non-Rust artifact"
    if re.match(r"^(select|insert|update|delete|create table|alter table|drop table)\b", lowered):
        return "exclude", "SQL example"
    if lowered.startswith(("$ ", "sudo ", "curl ", "git ", "docker ")):
        return "exclude", "instructional shell command"
    if re.match(r"^(?:\[?\s*)?(?:\{\s*)?[\"']?[a-z_]+[\"']?\s*:", lowered):
        return "exclude", "JSON or data example"
    if not source_text or len(source_text) < 3:
        return "manual-review", "empty or too short"
    if language is None and re.search(r"(?m)^(?:%%writefile\b|(?:from|import)\s+\w+|class\s+\w+|def\s+\w+|#include\s*[<\"])|\b(yield|self\.)\b", source_text):
        return "convert", "detected Python-like programming example"
    if language is None:
        return "manual-review", "language or boundary unclear"
    return "convert", ""


def extract_code_candidates(snapshot: DeckSnapshot) -> list[CodeCandidate]:
    candidates: list[CodeCandidate] = []
    deck_name = snapshot.deck_path.stem.lower().replace(" ", "-")
    for note in snapshot.notes:
        for field_index, field in enumerate(note.fields):
            matches = list(CODE_BLOCK_RE.finditer(field))
            if not matches:
                matches = list(INLINE_CODE_RE.finditer(field))
            standalone = None
            if not matches and re.match(r"(?is)^\s*(sql|json|yaml|shell|bash)\s*[:：]", field):
                standalone = re.match(r"(?is)^(?P<body>.*)$", field)
            if standalone is not None:
                matches = [standalone]
            for occurrence, match in enumerate(matches):
                source_html = match.group(0)
                source_text = _visible_text(match.group("body"))
                language = _language(source_html)
                classification, notes = _classification(language, source_text)
                candidates.append(CodeCandidate(
                    deck_path=str(snapshot.deck_path), note_id=note.note_id,
                    field_index=field_index,
                    snippet_id=f"{deck_name}-{note.note_id}-{field_index}-{occurrence}",
                    source_html=source_html, source_text=source_text,
                    language=language, classification=classification, notes=notes,
                    occurrence=occurrence, start=match.start(), end=match.end(),
                ))
    return candidates


def write_inventory(candidates: Iterable[CodeCandidate], output_path: Path) -> None:
    payload = []
    for candidate in candidates:
        item = asdict(candidate)
        item.pop("start", None)
        item.pop("end", None)
        payload.append(item)
    payload.sort(key=lambda item: item["snippet_id"])
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")


def load_inventory(path: Path) -> list[dict]:
    return json.loads(path.read_text())


_RUST_TOKEN_RE = re.compile(
    r"//[^\n]*|/\*.*?\*/|\"(?:\\.|[^\"\\])*\"|"
    r"\b(?:fn|let|mut|struct|enum|trait|impl|use|pub|mod|match|if|else|for|while|loop|return|self|Self|true|false|Some|None|Result|Option|String|usize|u8|u64)\b|"
    r"\b\d+\b",
    re.DOTALL,
)
_RUST_TOKEN_STYLES = {
    "rust-keyword": "#c586c0",
    "rust-string": "#ce9178",
    "rust-comment": "#6a9955",
    "rust-number": "#b5cea8",
}


def highlight_rust_html(source: str) -> str:
    """Render Rust source with inline colors, so Anki needs no external highlighter."""
    parts: list[str] = ['<code class="language-rust">']
    cursor = 0
    for match in _RUST_TOKEN_RE.finditer(source):
        parts.append(html.escape(source[cursor:match.start()], quote=False))
        token = match.group(0)
        if token.startswith("//") or token.startswith("/*"):
            kind = "rust-comment"
        elif token.startswith('"'):
            kind = "rust-string"
        elif token.isdigit():
            kind = "rust-number"
        else:
            kind = "rust-keyword"
        parts.append(f'<span class="{kind}" style="color:{_RUST_TOKEN_STYLES[kind]}">{html.escape(token, quote=False)}</span>')
        cursor = match.end()
    parts.append(html.escape(source[cursor:], quote=False))
    parts.append("</code>")
    return "".join(parts)


def _replace_candidate(field: str, candidate: dict, replacement: str) -> str:
    source_html = candidate["source_html"]
    occurrence = int(candidate.get("occurrence", int(candidate["snippet_id"].rsplit("-", 1)[-1])))
    occurrence = min(occurrence, field.count(source_html) - 1)
    start = -1
    search_from = 0
    for _ in range(occurrence + 1):
        start = field.find(source_html, search_from)
        if start < 0:
            raise ValueError(f"source boundary missing for {candidate['snippet_id']}")
        search_from = start + len(source_html)
    end = start + len(source_html)
    highlighted = highlight_rust_html(replacement)
    if source_html.lower().startswith("<pre"):
        updated = re.sub(r"(?is)(<pre\b[^>]*>).*?(</pre>)", lambda match: match.group(1) + highlighted + match.group(2), source_html, count=1)
    else:
        updated = highlighted
    return field[:start] + updated + field[end:]


def apply_inventory_replacements(deck_path: Path, inventory: list[dict], output_path: Path) -> None:
    by_note: dict[tuple[int, int], list[dict]] = {}
    for entry in inventory:
        if entry["classification"] == "convert":
            by_note.setdefault((entry["note_id"], entry["field_index"]), []).append(entry)
    temp_dir, _, _ = _read_archive(deck_path)
    try:
        database = temp_dir / "collection.anki2"
        connection = sqlite3.connect(database)
        for note_id, fields_value in connection.execute("SELECT id, flds FROM notes ORDER BY id"):
            fields = fields_value.split(FIELD_SEPARATOR)
            for field_index, field in enumerate(fields):
                entries = by_note.get((note_id, field_index), [])
                for entry in sorted(entries, key=lambda item: int(item.get("occurrence", int(item["snippet_id"].rsplit("-", 1)[-1]))), reverse=True):
                    replacement = entry.get("rust_replacement")
                    if not replacement:
                        raise ValueError(f"missing Rust replacement for {entry['snippet_id']}")
                    field = _replace_candidate(field, entry, replacement)
                fields[field_index] = field
            new_fields = FIELD_SEPARATOR.join(fields)
            if new_fields != fields_value:
                connection.execute("UPDATE notes SET flds = ?, sfld = ?, csum = ? WHERE id = ?", (new_fields, fields[0], field_checksum(fields[0]), note_id))
        connection.commit()
        connection.close()
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED) as archive:
            for source in sorted(temp_dir.rglob("*")):
                if source.is_file():
                    archive.write(source, source.relative_to(temp_dir).as_posix())
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)


def validate_inventory(inventory: list[dict]) -> None:
    ids = [entry["snippet_id"] for entry in inventory]
    if len(ids) != len(set(ids)):
        raise ValueError("duplicate inventory snippet ID")
    for entry in inventory:
        if entry["classification"] == "convert" and not entry.get("rust_replacement"):
            raise ValueError(f"missing replacement: {entry['snippet_id']}")


def validate_migrated_deck(source_path: Path, output_path: Path, inventory: list[dict]) -> None:
    validate_inventory(inventory)
    source = extract_deck_notes(source_path)
    output = extract_deck_notes(output_path)
    if (source.note_count, source.card_count, source.deck_count, source.model_count) != (output.note_count, output.card_count, output.deck_count, output.model_count):
        raise ValueError("Anki counts changed")
    if source.members != output.members:
        raise ValueError("archive members changed")
    source_fields = {(note.note_id, index): value for note in source.notes for index, value in enumerate(note.fields)}
    output_fields = {(note.note_id, index): value for note in output.notes for index, value in enumerate(note.fields)}
    converted_keys = {(entry["note_id"], entry["field_index"]) for entry in inventory if entry["classification"] == "convert"}
    for entry in inventory:
        key = (entry["note_id"], entry["field_index"])
        before = source_fields[key]
        after = output_fields[key]
        if entry["classification"] != "convert" and key not in converted_keys and before != after:
            raise ValueError(f"out-of-scope field changed: {entry['snippet_id']}")
        if entry["classification"] != "convert" and entry["source_html"] not in after:
            raise ValueError(f"excluded or manual snippet changed: {entry['snippet_id']}")
        if entry["classification"] == "convert" and entry["source_html"] in after:
            raise ValueError(f"source snippet remains: {entry['snippet_id']}")
    with zipfile.ZipFile(output_path) as archive:
        with tempfile.TemporaryDirectory() as directory:
            archive.extract("collection.anki2", directory)
            connection = sqlite3.connect(Path(directory) / "collection.anki2")
            if connection.execute("PRAGMA quick_check").fetchone()[0] != "ok":
                raise ValueError("SQLite quick_check failed")
            for note_id, fields, checksum in connection.execute("SELECT id, flds, csum FROM notes"):
                first_field = fields.split(FIELD_SEPARATOR)[0]
                if int(checksum) != field_checksum(first_field):
                    raise ValueError(f"checksum mismatch: {note_id}")
            connection.close()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--deck", action="append", required=True, type=Path)
    parser.add_argument("--inventory", type=Path, required=True)
    args = parser.parse_args()
    candidates = []
    for deck in args.deck:
        snapshot = extract_deck_notes(deck)
        candidates.extend(extract_code_candidates(snapshot))
    write_inventory(candidates, args.inventory)
    print(f"inventoried {len(candidates)} code candidates")


if __name__ == "__main__":
    main()
