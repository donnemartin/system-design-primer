# Anki Deck Local Media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Embed repository-owned image media into all three Anki decks and rewrite only media elements to local filenames so AnkiWeb can sync them across devices.

**Architecture:** Add a dependency-free Python utility that extracts an `.apkg`, edits note HTML in SQLite, copies resolvable repository assets, updates Anki's media manifest and note checksums, then repacks the archive. Tests use temporary fixture archives and never modify source decks. Run the utility against the three tracked decks after tests pass.

**Tech Stack:** Python 3 standard library (`argparse`, `html.parser`, `sqlite3`, `tempfile`, `zipfile`, `hashlib`, `json`, `re`, `unittest`). Anki `.apkg` ZIP and SQLite formats.

**Spec:** `docs/superpowers/specs/2026-10-24-anki-local-media-design.md`

## Global Constraints

- Rewrite only `<img src>`, `<video src>`, `<source src>`, and equivalent media references; preserve anchor destinations.
- Prefer `data-canonical-src` for Camo resolution, then decode the hexadecimal origin payload and support Imgur IDs.
- Scan every note field and recalculate Anki note checksums after changing `notes.flds`.
- Leave unresolved media unchanged and report it.
- Preserve note/card counts and unrelated collection data.
- Do not modify untracked `.opencode/` files.

## Review Focus

- Camo origin payloads are hexadecimal URL encoding, not Base64 — test resolution of the supplied Camo shape.
- HTML entities and quoted attributes must parse safely — test `&amp;` and both quote styles.
- `data-canonical-src` may be the only reliable source — test it taking precedence.
- Unresolved remote media must not be silently deleted — test unchanged HTML plus report.
- Archive and SQLite integrity must survive repacking — test ZIP members, `PRAGMA quick_check`, note count, and checksum.

---

### Task 1: Build media localization utility

**Files:**
- Create: `tools/localize_anki_media.py`
- Create: `tests/test_localize_anki_media.py`

**Interfaces:**
- `resolve_local_asset(url: str, canonical_url: str | None, asset_dir: Path) -> Path | None`
- `rewrite_media_html(html: str, resolver: Callable[[str, str | None], str | None], register: Callable[[str], None]) -> tuple[str, list[str]]`
- `localize_deck(deck_path: Path, asset_dir: Path, output_path: Path) -> LocalizationReport`
- `LocalizationReport` contains deck path, localized filenames, unresolved URLs, original note count, and final note count.

- [ ] **Step 1: Write failing unit tests for URL resolution and HTML rewriting**

Test:
- A Camo URL with a hexadecimal origin resolves `h81n9iK.png` from `images/`.
- `data-canonical-src` wins over the encoded Camo origin.
- Direct Imgur URLs resolve by basename and extension.
- `<img>`, `<video>`, and `<source>` `src` values rewrite to local filenames.
- `&amp;` and single-quoted attributes parse correctly.
- Anchor `href` values remain unchanged.
- Unresolved media remains unchanged and appears in the returned unresolved list.

- [ ] **Step 2: Run focused tests and verify they fail**

Run: `python3 -m unittest tests.test_localize_anki_media -v`
Expected: FAIL because `tools/localize_anki_media.py` does not exist.

- [ ] **Step 3: Implement resolver and HTML rewrite functions**

Use the local asset basename as the Anki media filename. Decode Camo's trailing hexadecimal payload with `bytes.fromhex(...).decode(...)`; extract Imgur IDs from the resolved URL. Use an HTML parser or a minimal attribute-preserving transformation that changes only media `src` attributes. Register each successfully resolved basename for packaging.

- [ ] **Step 4: Implement `localize_deck`**

Extract into a temporary directory, read every row in `notes`, rewrite all `flds` values using the same Anki field separator, update `notes.csum` for changed fields using Anki's UTF-8 field checksum algorithm, copy assets into the archive root, write a sorted JSON media manifest mapping each filename to itself, and repack with `collection.anki2` plus `media`. Keep unresolved references unchanged and return them in the report.

- [ ] **Step 5: Add fixture archive integration tests**

Create a temporary minimal `.apkg` with one note containing resolvable and unresolved media. Assert after localization:
- note count is unchanged;
- `PRAGMA quick_check` returns `ok`;
- rewritten media files exist in the ZIP;
- `media` manifest maps each included file to itself;
- unresolved URL remains in note HTML;
- changed note checksum matches the implementation's checksum function;
- output archive includes `collection.anki2` and `media`.

- [ ] **Step 6: Run focused tests and verify they pass**

Run: `python3 -m unittest tests.test_localize_anki_media -v`
Expected: PASS.

- [ ] **Step 7: Add CLI and report behavior**

Implement `python3 tools/localize_anki_media.py --deck PATH --assets images --output PATH`, with repeatable `--deck` arguments for in-place processing of the three repository decks. Print localized files and unresolved URLs. Refuse to overwrite an input deck unless `--in-place` is supplied.

- [ ] **Step 8: Run CLI help and test suite**

Run: `python3 tools/localize_anki_media.py --help && python3 -m unittest discover -v`
Expected: help exits 0 and all tests pass.

### Task 2: Localize tracked decks

**Files:**
- Modify: `resources/flash_cards/System Design.apkg`
- Modify: `resources/flash_cards/System Design Exercises.apkg`
- Modify: `resources/flash_cards/OO Design.apkg`

**Interfaces:**
- Consumes `tools/localize_anki_media.py` from Task 1.
- Produces three valid `.apkg` files with embedded media.

- [ ] **Step 1: Run the utility into temporary output files**

Process all three decks using `images/` as the asset directory. Do not overwrite tracked decks until validation succeeds.

- [ ] **Step 2: Validate generated archives**

For each output, verify ZIP extraction, SQLite `PRAGMA quick_check`, unchanged note/card counts, valid `media` JSON, every manifest file exists, and every rewritten local media reference resolves. Confirm no rewritten media element still points to Camo or Imgur.

- [ ] **Step 3: Replace tracked decks with validated outputs**

Move validated outputs over the three tracked `.apkg` files. Leave unresolved media unchanged and include the unresolved list in the final report.

- [ ] **Step 4: Run final regression checks**

Run: `python3 -m unittest discover -v`

Run a ZIP/SQLite validation script over all three decks. Expected: all tests pass, all archives are readable, and only intended files appear in `git status`.

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/specs/2026-10-24-anki-local-media-design.md docs/superpowers/plans/2026-10-24-anki-deck-local-media.md tools/localize_anki_media.py tests/test_localize_anki_media.py resources/flash_cards/*.apkg
git commit -m "fix: embed Anki deck media locally"
```
