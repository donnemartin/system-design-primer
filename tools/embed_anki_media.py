#!/usr/bin/env python3
"""Embed local image assets into Anki package files."""

from __future__ import annotations

import json
import re
import shutil
import sqlite3
import tempfile
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DECKS = [
    ROOT / "resources" / "flash_cards" / "System Design.apkg",
    ROOT / "resources" / "flash_cards" / "System Design Exercises.apkg",
]

IMG_SRC_RE = re.compile(r'src="([^"]+)"')
CAMO_RE = re.compile(r"https://camo\.githubusercontent\.com/[0-9a-f]+/([0-9a-f]+)")


def decode_camo(url: str) -> str:
    match = CAMO_RE.fullmatch(url)
    if not match:
        return url
    return bytes.fromhex(match.group(1)).decode("utf-8")


def media_name(src: str) -> str | None:
    decoded = decode_camo(src)
    match = re.search(r"/([^/]+\.(?:png|jpg|jpeg|gif))$", decoded, re.IGNORECASE)
    if not match:
        return None
    return match.group(1)


def image_index() -> dict[str, Path]:
    return {
        path.name: path
        for path in ROOT.rglob("*")
        if path.suffix.lower() in {".png", ".jpg", ".jpeg", ".gif"}
    }


def rewrite_fields(fields: str, media_files: dict[str, Path]) -> str:
    def replace(match: re.Match[str]) -> str:
        name = media_name(match.group(1))
        if name and name in media_files:
            return f'src="{name}"'
        return match.group(0)

    return IMG_SRC_RE.sub(replace, fields)


def update_deck(deck: Path) -> None:
    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        with zipfile.ZipFile(deck) as source:
            source.extractall(tmp)

        db = tmp / "collection.anki2"
        available_media = image_index()
        deck_media: set[str] = set()

        connection = sqlite3.connect(db)
        try:
            rows = connection.execute("select id, flds from notes").fetchall()
            for note_id, fields in rows:
                updated = rewrite_fields(fields, available_media)
                if updated != fields:
                    connection.execute(
                        "update notes set flds = ?, mod = cast(strftime('%s','now') as integer) where id = ?",
                        (updated, note_id),
                    )
                    deck_media.update(
                        name
                        for name in (media_name(src) for src in IMG_SRC_RE.findall(fields))
                        if name and name in available_media
                    )
            connection.commit()
        finally:
            connection.close()

        media_map = {str(index): name for index, name in enumerate(sorted(deck_media))}
        (tmp / "media").write_text(json.dumps(media_map, separators=(",", ":")), encoding="utf-8")
        for archive_name, file_name in media_map.items():
            shutil.copyfile(available_media[file_name], tmp / archive_name)

        with zipfile.ZipFile(deck, "w", compression=zipfile.ZIP_DEFLATED) as target:
            target.write(db, "collection.anki2")
            target.write(tmp / "media", "media")
            for archive_name in media_map:
                target.write(tmp / archive_name, archive_name)


def main() -> None:
    for deck in DECKS:
        update_deck(deck)


if __name__ == "__main__":
    main()
