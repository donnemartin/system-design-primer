# Rust Flashcard Code Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert programming snippets inside the three tracked Anki flashcard decks to Rust while preserving all other card content and deck behavior.

**Architecture:** Add a separate Python migration utility that extracts Anki notes, identifies code-bearing HTML regions, emits a stable JSON inventory, applies only explicit approved replacements, and validates temporary rebuilt decks before replacement. Keep media localization logic untouched and preserve source decks until validation passes.

**Tech Stack:** Python 3 standard library (`sqlite3`, `zipfile`, `json`, `hashlib`, `html.parser`, `unittest`), SQLite Anki collections, Rust `rustc` for complete snippets, JSON inventory.

**Spec:** `docs/superpowers/specs/2026-10-24-rust-flashcard-code-migration-design.md`

## Global Constraints

- Change only programming snippets inside note fields of the three listed `.apkg` files.
- Leave `solutions/`, `tools/`, `tests/`, notebooks, shell scripts, README code, SQL, JSON, YAML, HTML, configuration, and instructional shell commands unchanged.
- Preserve note fields, links, media `src`, media files, scheduling data, templates, card order, and all HTML outside replacement boundaries.
- Recalculate Anki note checksums whenever `notes.flds` changes.
- Never overwrite source decks before temporary outputs pass structural and content validation.
- Leave untracked `.opencode/` files untouched.
- Use explicit inventory replacements; never perform opaque bulk syntax replacement.

## Review Focus

- Nested syntax-highlighting markup and HTML entities must preserve displayed Rust text and surrounding tags; test extraction and replacement boundaries.
- `<a href>` and media `src` attributes must remain byte-for-byte unchanged; test mixed code/media cards.
- Partial snippets must be marked `manual-review` or compiled in a minimal harness, never falsely reported as complete programs; test classification metadata.
- Non-programming examples must remain unchanged and be recorded as `exclude`; test SQL, JSON, shell, and pseudocode candidates.
- Anki archive structure and checksums must survive rebuild; test ZIP members, SQLite `quick_check`, counts, media manifest, and checksums.

---

### Task 1: Build flashcard extraction and inventory generator

**Files:**
- Create: `tools/migrate_anki_code_to_rust.py`
- Create: `tests/test_migrate_anki_code_to_rust.py`

**Interfaces:**
- `extract_deck_notes(deck_path: Path) -> DeckSnapshot`
- `extract_code_candidates(snapshot: DeckSnapshot) -> list[CodeCandidate]`
- `write_inventory(candidates: list[CodeCandidate], output_path: Path) -> None`
- `field_checksum(first_field: str) -> str`

- [ ] **Step 1: Write failing tests**

Test fixture `.apkg` contains code in `<pre><code>`, nested highlighted spans, standalone code, prose, an anchor, and an image. Assert extraction returns deck path, note ID, field index, stable snippet ID, original HTML/range, and source-language metadata without changing source files.

- [ ] **Step 2: Run focused tests and verify failure**

Run: `python3 -m unittest tests.test_migrate_anki_code_to_rust -v`
Expected: FAIL because migration module and interfaces do not exist.

- [ ] **Step 3: Implement safe archive extraction and note snapshots**

Extract each archive into a temporary directory with path-traversal checks. Read `collection.anki2`, retain original note fields, note metadata, counts, media manifest, and archive members. Treat `\x1f` as the only field separator and keep raw HTML for exact comparisons.

- [ ] **Step 4: Implement candidate detection and stable IDs**

Detect `<pre>`/`<code>` regions while preserving outer markup and nested tags. Detect only clearly bounded standalone programming snippets with conservative language labels. Classify candidates as `convert`, `exclude`, or `manual-review`; exclude SQL, JSON, YAML, HTML, shell instructions, pseudocode, and unclear regions. Generate IDs from deck-relative path, note ID, field index, and occurrence order.

- [ ] **Step 5: Implement JSON inventory output**

Write deterministic, sorted JSON to `docs/superpowers/rust-flashcard-code-inventory.json` with source HTML/text, language, classification, replacement placeholder, validation status, and notes. Ensure every candidate is represented exactly once.

- [ ] **Step 6: Run focused tests**

Run: `python3 -m unittest tests.test_migrate_anki_code_to_rust -v`
Expected: PASS.

### Task 2: Inventory all tracked decks and review candidates

**Files:**
- Create: `docs/superpowers/rust-flashcard-code-inventory.json`
- Modify: `tools/migrate_anki_code_to_rust.py`

**Interfaces:**
- Consumes `extract_code_candidates` from Task 1.
- Produces one complete inventory covering `System Design.apkg`, `System Design Exercises.apkg`, and `OO Design.apkg`.

- [ ] **Step 1: Generate inventory from temporary copies**

Run the generator against all three tracked decks. Do not edit any deck.

- [ ] **Step 2: Inspect every candidate**

Review each candidate's source text and classification. Keep out-of-scope examples unchanged. Resolve clear programming examples as `convert`; mark ambiguous or context-dependent fragments `manual-review` with a concrete reason.

- [ ] **Step 3: Validate inventory completeness**

Assert all three decks appear, IDs are unique, every entry has required fields, and every `convert` entry has an empty replacement ready for Task 3.

### Task 3: Add explicit Rust replacements and snippet validation

**Files:**
- Modify: `docs/superpowers/rust-flashcard-code-inventory.json`
- Create: `tests/fixtures/rust_flashcard_snippets/` only if harness fixtures are needed

**Interfaces:**
- Each converted inventory item receives `rust_replacement`, `validation_status`, and `notes`.
- Complete snippets use `rustc`; fragments use a documented harness or `manual-review`.

- [ ] **Step 1: Translate each `convert` candidate manually**

Preserve algorithmic intent, comments, concepts, and sample output. Use Rust standard library only unless a dependency is required to preserve meaning. Record material behavior or syntax differences.

- [ ] **Step 2: Validate complete replacements**

Compile complete examples with `rustc --edition 2021`. Run examples when expected output exists. Do not claim compilation for incomplete fragments.

- [ ] **Step 3: Review replacement coverage**

Assert every `convert` item has exactly one non-empty replacement and every `exclude`/`manual-review` item remains unchanged.

### Task 4: Apply replacements with boundary preservation

**Files:**
- Modify: `tools/migrate_anki_code_to_rust.py`
- Modify: `tests/test_migrate_anki_code_to_rust.py`

**Interfaces:**
- `apply_inventory_replacements(deck_path: Path, inventory: list[dict], output_path: Path) -> MigrationReport`
- `replace_code_region(html: str, candidate: CodeCandidate, replacement: str) -> str`

- [ ] **Step 1: Write failing boundary tests**

Assert replacement changes only selected code text, preserves nested markup where required, leaves prose, anchors, media `src`, field separators, and unrelated fields unchanged, and updates `notes.csum` from the new first field.

- [ ] **Step 2: Implement targeted replacement**

Match by note ID, field index, stable occurrence, and original source boundary. Replace only approved `convert` entries. Refuse missing, duplicated, or mismatched candidates instead of guessing.

- [ ] **Step 3: Implement temporary archive repacking**

Copy all original archive members and media unchanged, update only `collection.anki2`, preserve valid `media` JSON, and write output to a separate path.

- [ ] **Step 4: Run focused tests**

Run: `python3 -m unittest tests.test_migrate_anki_code_to_rust -v`
Expected: PASS.

### Task 5: Validate rebuilt decks

**Files:**
- Modify: `tools/migrate_anki_code_to_rust.py`
- Modify: `tests/test_migrate_anki_code_to_rust.py`

**Interfaces:**
- `validate_migrated_deck(source_path: Path, output_path: Path, inventory: list[dict]) -> ValidationReport`
- `validate_inventory(inventory: list[dict]) -> None`

- [ ] **Step 1: Write structural and regression tests**

Assert ZIP readability, `collection.anki2`, valid `media`, SQLite `PRAGMA quick_check = ok`, unchanged note/card/deck/model counts, preserved archive members and media references, correct checksums, one replacement per converted entry, unchanged exclusions/manual reviews, unchanged anchor destinations, and unchanged non-code HTML.

- [ ] **Step 2: Implement validation**

Compare source and output snapshots by note ID and field index. Fail on changed boundaries, missing media, count drift, invalid checksums, source snippets remaining for converted entries, or accidental changes outside approved regions.

- [ ] **Step 3: Run full migration tests**

Run: `python3 -m unittest discover -v`
Expected: PASS.

### Task 6: Migrate tracked decks and finalize documentation

**Files:**
- Modify: `resources/flash_cards/System Design.apkg`
- Modify: `resources/flash_cards/System Design Exercises.apkg`
- Modify: `resources/flash_cards/OO Design.apkg`
- Modify: `docs/superpowers/specs/2026-10-24-rust-flashcard-code-migration-design.md`

**Interfaces:**
- Consumes approved inventory and migration utility.
- Produces three validated replacement decks and final inventory/status documentation.

- [ ] **Step 1: Build temporary outputs**

Run migration for all three decks into a temporary directory. Keep source decks untouched.

- [ ] **Step 2: Run structural, content, and Rust validation**

Require all tests and per-deck validation to pass. Review extracted note diffs for every converted and manual-review item.

- [ ] **Step 3: Replace tracked decks only after validation**

Move validated outputs over tracked `.apkg` files. Update design status to `Accepted` or `Implemented` and document unresolved manual-review entries and known limitations.

- [ ] **Step 4: Run final checks**

Run: `python3 -m unittest discover -v`
Run: `git diff --stat && git status --short`
Expected: tests pass; only intended decks, migration utility, tests, inventory, and design/plan documentation change; `.opencode/` remains untouched.

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/specs/2026-10-24-rust-flashcard-code-migration-design.md docs/superpowers/plans/2026-10-24-rust-flashcard-code-migration.md docs/superpowers/rust-flashcard-code-inventory.json tools/migrate_anki_code_to_rust.py tests/test_migrate_anki_code_to_rust.py resources/flash_cards/*.apkg
git commit -m "feat: migrate Anki flashcard code to Rust"
```
