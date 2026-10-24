#!/usr/bin/env python3
"""Embed repository media into Anki package files."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import shutil
import sqlite3
import stat
import tempfile
import zipfile
from pathlib import PurePosixPath
from dataclasses import dataclass
from pathlib import Path
from typing import Callable
from urllib.parse import urlparse

_MEDIA_TAG = re.compile(
    r"(<(?:img|video|source)\b[^>]*?(?<![-\w])src\s*=\s*)([\"'])(.*?)(\2)",
    re.IGNORECASE | re.DOTALL,
)
_CANONICAL_ATTR = re.compile(
    r"\bdata-canonical-src\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL
)


@dataclass
class LocalizationReport:
    deck_path: Path
    localized_filenames: list[str]
    unresolved_urls: list[str]
    original_note_count: int
    final_note_count: int


def field_checksum(first_field: str) -> int:
    """Return Anki's checksum for the first note field."""
    return int(hashlib.sha1(first_field.encode("utf-8")).hexdigest()[:8], 16)


def _asset_name(url: str) -> str | None:
    parsed = urlparse(url)
    name = Path(parsed.path).name
    if not name or name in {".", ".."}:
        return None
    return name


def _canonical_origin(url: str) -> str:
    path = urlparse(url).path.rstrip("/")
    payload = path.rsplit("/", 1)[-1]
    if "camo.githubusercontent.com" not in url:
        return url
    try:
        return bytes.fromhex(payload).decode("utf-8")
    except (ValueError, UnicodeDecodeError):
        return url


def resolve_local_asset(url: str, canonical_url: str | None, asset_dir: Path) -> Path | None:
    """Resolve a media URL to an existing repository asset by filename."""
    candidate_url = html.unescape(canonical_url or "") if canonical_url else ""
    if not candidate_url:
        candidate_url = _canonical_origin(html.unescape(url))
    name = _asset_name(candidate_url)
    if not name:
        return None
    asset = asset_dir / name
    return asset if asset.is_file() else None


def rewrite_media_html(
    html_text: str,
    resolver: Callable[[str, str | None], str | None],
    register: Callable[[str], None],
) -> tuple[str, list[str]]:
    """Rewrite media tag sources while preserving all other HTML attributes."""
    unresolved: list[str] = []

    def replace(match: re.Match[str]) -> str:
        prefix, quote, raw_url, closing_quote = match.groups()
        url = html.unescape(raw_url)
        tag_start = html_text.rfind("<", 0, match.start() + 1)
        tag_end = html_text.find(">", match.end())
        tag_text = html_text[tag_start : tag_end + 1] if tag_start >= 0 and tag_end >= 0 else match.group(0)
        canonical_match = _CANONICAL_ATTR.search(tag_text)
        canonical = html.unescape(canonical_match.group(2)) if canonical_match else None
        local_name = resolver(url, canonical)
        if local_name is None:
            unresolved.append(url)
            return match.group(0)
        register(local_name)
        return f"{prefix}{quote}{local_name}{closing_quote}"

    return _MEDIA_TAG.sub(replace, html_text), unresolved


def _rewrite_field(field: str, asset_dir: Path, filenames: set[str]) -> tuple[str, list[str]]:
    return rewrite_media_html(
        field,
        lambda url, canonical: (
            resolve_local_asset(url, canonical, asset_dir).name
            if resolve_local_asset(url, canonical, asset_dir)
            else None
        ),
        filenames.add,
    )


def _normalize_media_manifest(raw_manifest: dict[str, str]) -> dict[str, str]:
    """Return Anki's filename-to-numeric-member media mapping."""
    if all(not str(key).isdigit() and str(value).isdigit() for key, value in raw_manifest.items()):
        return {str(key): str(value) for key, value in raw_manifest.items()}
    if all(str(key).isdigit() for key in raw_manifest):
        return {str(name): str(key) for key, name in raw_manifest.items()}
    normalized: dict[str, str] = {}
    next_id = 0
    for name in raw_manifest.values():
        while str(next_id) in normalized.values():
            next_id += 1
        normalized[str(name)] = str(next_id)
        next_id += 1
    return normalized


def _extract_archive(archive: zipfile.ZipFile, destination: Path) -> list[str]:
    members = archive.infolist()
    for member in members:
        path = PurePosixPath(member.filename)
        if path.is_absolute() or ".." in path.parts:
            raise ValueError(f"unsafe archive member: {member.filename}")
        if stat.S_ISLNK(member.external_attr >> 16):
            raise ValueError(f"unsafe archive member: {member.filename}")
    archive.extractall(destination)
    return [member.filename for member in members]


def localize_deck(deck_path: Path, asset_dir: Path, output_path: Path) -> LocalizationReport:
    """Create a localized copy of one Anki package."""
    localized: set[str] = set()
    unresolved: list[str] = []
    with tempfile.TemporaryDirectory() as temporary:
        extracted = Path(temporary)
        with zipfile.ZipFile(deck_path) as archive:
            original_members = _extract_archive(archive, extracted)
            existing_manifest = _normalize_media_manifest(
                json.loads(archive.read("media")) if "media" in archive.namelist() else {}
            )
        database_path = extracted / "collection.anki2"
        connection = sqlite3.connect(database_path)
        original_count = connection.execute("SELECT COUNT(*) FROM notes").fetchone()[0]
        rows = connection.execute("SELECT id, flds FROM notes").fetchall()
        for note_id, fields in rows:
            field_values = fields.split("\x1f")
            rewritten_values = []
            changed = False
            for field in field_values:
                rewritten, missing = _rewrite_field(field, asset_dir, localized)
                rewritten_values.append(rewritten)
                unresolved.extend(missing)
                changed |= rewritten != field
            rewritten_fields = "\x1f".join(rewritten_values)
            if changed:
                connection.execute(
                    "UPDATE notes SET flds = ?, csum = ? WHERE id = ?",
                    (rewritten_fields, field_checksum(rewritten_values[0]), note_id),
                )
            else:
                connection.execute(
                    "UPDATE notes SET csum = ? WHERE id = ?",
                    (field_checksum(rewritten_values[0]), note_id),
                )
        connection.commit()
        final_count = connection.execute("SELECT COUNT(*) FROM notes").fetchone()[0]
        connection.close()

        media_manifest = dict(existing_manifest)
        next_media_id = max((int(value) for value in media_manifest.values()), default=-1) + 1
        for name in sorted(localized):
            if name not in media_manifest:
                media_manifest[name] = str(next_media_id)
                next_media_id += 1
            shutil.copy2(asset_dir / name, extracted / name)
        media_path = extracted / "media"
        media_path.write_text(json.dumps(media_manifest, separators=(",", ":")), encoding="utf-8")

        media_sources: dict[str, Path] = {}
        media_members: set[str] = set()
        for name, member in media_manifest.items():
            member_path = extracted / member
            name_path = extracted / name
            if member_path.exists():
                media_sources[member] = member_path
            elif name_path.exists():
                media_sources[member] = name_path
            media_members.update({name, member})

        output_path.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output_path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
            archive.write(database_path, "collection.anki2")
            archive.write(media_path, "media")
            for member in original_members:
                if member not in {"collection.anki2", "media"} and member not in media_members:
                    archive.write(extracted / member, member)
            for member, source in sorted(media_sources.items()):
                archive.write(source, member)

    return LocalizationReport(
        deck_path=deck_path,
        localized_filenames=sorted(localized),
        unresolved_urls=unresolved,
        original_note_count=original_count,
        final_note_count=final_count,
    )


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--deck", action="append", type=Path, required=True)
    parser.add_argument("--assets", type=Path, required=True)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--in-place", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = _parse_args()
    if not args.assets.is_dir():
        raise SystemExit(f"assets directory does not exist: {args.assets}")
    if any(not deck.is_file() for deck in args.deck):
        raise SystemExit("all --deck paths must be files")
    if args.in_place and args.output:
        raise SystemExit("--output and --in-place cannot be combined")
    if not args.in_place and args.output is None:
        raise SystemExit("--output is required unless --in-place is supplied")
    if not args.in_place and len(args.deck) != 1:
        raise SystemExit("--output is required for one deck; use --in-place for multiple decks")
    for deck in args.deck:
        output = deck if args.in_place else args.output
        if output == deck and not args.in_place:
            raise SystemExit("refusing to overwrite input deck without --in-place")
        report = localize_deck(deck, args.assets, output)
        print(f"{deck}: localized {len(report.localized_filenames)} media files")
        for url in sorted(set(report.unresolved_urls)):
            print(f"unresolved: {url}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
