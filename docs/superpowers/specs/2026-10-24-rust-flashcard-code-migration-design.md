# Rust Flashcard Code Migration Design

## Status

Proposed

## Date

2026-10-24

## Intent

Convert programming code shown inside the repository's Anki flashcards to Rust while preserving the decks' educational content and Anki behavior.

This migration changes flashcard code examples only. It does not migrate repository source code.

## Scope

### In scope

- Code contained in note fields inside:
  - `resources/flash_cards/System Design.apkg`
  - `resources/flash_cards/System Design Exercises.apkg`
  - `resources/flash_cards/OO Design.apkg`
- Fenced code blocks represented in Anki HTML as `<pre>` and `<code>` elements.
- Clearly identifiable standalone programming snippets in card fields.
- Existing code-language labels where they identify the snippet's language.
- Code comments and output examples when they belong to the converted snippet.

Every identified programming snippet will receive a Rust equivalent unless manual review determines that the snippet is not meaningfully translatable.

### Out of scope

- `solutions/` Python source files.
- `tools/` and `tests/` source files.
- Jupyter notebooks.
- `generate-epub.sh` and other shell scripts.
- README and Markdown code blocks outside Anki packages.
- Anki scheduling data, deck names, card templates, media files, and unrelated note text.
- Shell commands used as instructions rather than programming examples.
- SQL, JSON, YAML, HTML, and configuration examples when converting them to Rust would change their purpose.

Out-of-scope code remains unchanged and will be recorded in the inventory when encountered near an in-scope snippet.

## Goals

- Produce Rust versions of programming examples shown in the three decks.
- Preserve each card's question, explanation, answer structure, media, links, and formatting outside targeted code.
- Preserve note, card, deck, and media counts.
- Keep generated `.apkg` files valid and importable by Anki.
- Make every conversion reviewable through an inventory and a deterministic transformation report.
- Compile converted snippets when they are complete programs or can be wrapped without changing their teaching meaning.
- Report snippets that need manual review instead of silently dropping or inventing behavior.

## Non-goals

- Rewrite all repository code in Rust.
- Automatically translate arbitrary natural-language pseudocode.
- Force non-Rust artifacts such as SQL or shell commands into Rust.
- Improve algorithms, explanations, or teaching order beyond language conversion.
- Guarantee that incomplete illustrative fragments compile without adding context.
- Change links, images, audio, scheduling, or Anki templates.

## Constraints

- `.apkg` files are ZIP archives containing `collection.anki2`, a media manifest, and media files.
- Note fields are stored in SQLite using Anki's `\x1f` field separator.
- Decks already contain localized media. The migration must preserve local media references and embedded assets.
- HTML entities, nested tags, quoted attributes, and syntax-highlighting markup must survive rewriting.
- Anchor `href` values and non-code card HTML must remain unchanged.
- Anki note checksums must be recalculated whenever note field text changes.
- Source decks must never be overwritten before validation succeeds.
- Existing untracked `.opencode/` files must remain untouched.

## Decision

Use an inventory-first, reviewable migration pipeline:

1. Extract every note field from each deck.
2. Detect and classify code regions.
3. Create a stable inventory containing deck, note ID, field, location, detected language, and source text.
4. Convert only classified programming snippets to Rust.
5. Review each conversion and record its status.
6. Rewrite targeted HTML regions while preserving surrounding card content.
7. Rebuild validated `.apkg` files from temporary outputs.

The conversion itself may use a controlled manual mapping or a Rust-aware transformation helper, but the final replacement data must be explicit and reviewable. No opaque bulk replacement is allowed.

## Artifact Design

### Inventory

Create a migration inventory outside the decks, such as:

`docs/superpowers/rust-flashcard-code-inventory.json`

Each entry should contain:

- Deck path.
- Note ID.
- Field index.
- Stable snippet identifier.
- Original HTML or text range.
- Detected source language.
- Classification: `convert`, `exclude`, or `manual-review`.
- Rust replacement.
- Validation status.
- Notes about omitted context or behavior differences.

The inventory is the audit trail and prevents a missed snippet from appearing as a successful migration.

### Replacement boundaries

Prefer replacing the contents of existing `<pre><code>` regions while retaining:

- Outer HTML structure.
- Existing code block classes unless the class names explicitly encode the old language.
- Surrounding headings, explanations, lists, links, and media.
- Code comments that remain valid or require Rust syntax changes.

Update language labels from the source language to Rust only when the label is part of the code block presentation.

## Conversion Rules

- Preserve algorithmic intent and observable examples.
- Preserve variable and type concepts where Rust names can express them clearly.
- Use explicit Rust types when they teach the same design concept.
- Replace Python- or Java-specific constructs with the closest Rust concept, then document material differences.
- Preserve comments unless they describe syntax that no longer exists.
- Preserve sample output when Rust produces the same result.
- Mark output changes when formatting differs because of Rust conventions.
- Do not add external crates unless a standard-library implementation cannot preserve the example's purpose.
- Prefer Rust standard library examples for portability.
- Do not claim compilation for fragments that require missing surrounding definitions.

## Handling Ambiguous Content

- **Complete programming example:** convert and compile.
- **Partial programming fragment:** convert, compile inside a minimal test harness when safe, and mark as fragment.
- **Pseudocode:** leave unchanged unless the card explicitly presents it as a programming-language example; record as excluded.
- **SQL, shell, JSON, YAML, HTML, or configuration:** leave unchanged and record as excluded.
- **Mixed prose and code:** replace only the code region.
- **Syntax-highlighted HTML:** preserve highlighting markup where possible, but ensure displayed text is valid Rust.
- **Unclear language or boundary:** stop automated replacement and mark `manual-review`.

## Implementation Components

Extend or replace `tools/localize_anki_media.py` with separate Rust-content migration logic, rather than mixing code translation with media localization.

Proposed responsibilities:

- `extract_flashcard_code`: read decks and emit inventory candidates.
- `classify_code_region`: identify programming snippets and source language.
- `apply_rust_replacements`: replace only approved inventory entries.
- `validate_flashcard_migration`: compare unchanged regions and verify deck integrity.
- `repack_deck`: write a temporary validated `.apkg` while preserving media.

The implementation may remain a Python orchestration utility if that is the safest way to edit Anki SQLite and HTML. The requested migration target is the flashcard content, not the migration tooling.

## Validation

### Structural checks

For each deck:

- ZIP opens successfully.
- `collection.anki2` exists.
- `media` exists and remains valid JSON.
- SQLite `PRAGMA quick_check` returns `ok`.
- Note, card, deck, and model counts remain unchanged.
- Existing media files and local media references remain present.
- Note checksums match updated first fields.

### Content checks

- Every `convert` inventory entry has exactly one replacement.
- No approved programming snippet remains in its original source language.
- Every `exclude` entry remains unchanged.
- Every `manual-review` entry remains unchanged until explicitly resolved.
- Card text outside replacement boundaries matches the source deck.
- Anchor destinations and media `src` attributes remain unchanged.
- No replacement changes note field separators or card ordering.

### Rust checks

- Compile complete snippets with `rustc` or a temporary Cargo harness.
- Run examples with expected outputs where outputs are specified.
- Use compile-only checks for examples without runtime assertions.
- Mark incomplete fragments as reviewed but not compiled when required context is unavailable.

## Rollout

1. Copy source decks to temporary files.
2. Extract and inventory all candidate code regions.
3. Review and approve inventory classifications.
4. Add Rust replacements to the inventory.
5. Run replacement against temporary decks.
6. Run structural, content, and Rust validation.
7. Review generated card diffs or extracted note-field diffs.
8. Replace tracked decks only after all required checks pass.
9. Keep the inventory and migration tests with the change.

## Alternatives Considered

### Rewrite repository source code too

This would make the task much larger and would change maintained examples, tools, tests, notebooks, and documentation. It is rejected because the requested scope is code shown in flashcards only.

### Blind text replacement

Replacing language names or common syntax patterns cannot preserve semantics and can corrupt prose or HTML. It is rejected because flashcards contain mixed markup and incomplete snippets.

### Convert only Python snippets

This reduces effort but leaves other programming-language examples inconsistent with the requested Rust-only flashcard content. It is rejected unless inventory review proves all targeted snippets are Python.

### Rebuild decks without an inventory

This makes omissions and accidental content changes hard to detect. It is rejected because each code conversion needs review and traceability.

## Risks and Mitigations

- **Incomplete snippets do not compile.** Mark fragments explicitly and use minimal harnesses only when they preserve meaning.
- **HTML markup is damaged.** Test nested tags, entities, quote styles, and syntax-highlighting markup before processing real decks.
- **Non-code text changes accidentally.** Compare untouched regions against extracted source fields.
- **Media localization regresses.** Validate every existing local media reference and archive member after repacking.
- **Rust changes teaching meaning.** Require per-snippet review and record behavior differences in the inventory.
- **Deck corruption.** Write temporary outputs and run ZIP, SQLite, checksum, and count checks before replacement.

## Acceptance Criteria

The migration is ready when:

- All three Anki decks have been inventoried.
- Every in-scope programming snippet is converted to Rust or explicitly approved as `manual-review`.
- Out-of-scope code remains unchanged.
- Converted snippets pass applicable Rust validation.
- Card content outside targeted code regions is unchanged.
- All three `.apkg` files pass structural and Anki integrity checks.
- Tests cover extraction, classification, replacement boundaries, checksum updates, and regression preservation.
- The inventory documents every excluded, converted, and unresolved snippet.
