# Anki Deck Local Media Design

## Intent

Make the three repository Anki decks usable offline and safe to sync through AnkiWeb. Replace remote image and video references with files embedded in each deck's `collection.media` archive.

## Goals

- Localize media references in:
  - `resources/flash_cards/System Design.apkg`
  - `resources/flash_cards/System Design Exercises.apkg`
  - `resources/flash_cards/OO Design.apkg`
- Reuse matching assets already stored in `images/`.
- Rewrite Camo and Imgur image references to Anki media filenames.
- Embed localized assets and update each deck's `media` manifest.
- Preserve ordinary article, source, and repository hyperlinks.
- Validate archive structure, media references, and SQLite integrity.
- Keep the decks syncable through AnkiWeb by using normal collection media files.

## Non-goals

- Archive arbitrary web pages or external documents.
- Download every URL appearing in card text.
- Change card content, scheduling, deck names, or templates beyond media references.
- Guarantee video playback on every Anki client without testing the source format.

## Constraints

- `.apkg` files are ZIP archives containing Anki SQLite data and a media manifest.
- Existing media manifests are empty: `{}`.
- Local image names use Imgur identifiers, such as `images/h81n9iK.png`.
- Camo URLs contain a hexadecimal signature and a hexadecimal-encoded origin URL. The signature must not be retained as a dependency.
- Missing or unresolved media must be reported rather than silently replaced.
- Existing untracked `.opencode/` files are user work and must remain untouched.

## Approaches

### Rewrite to GitHub Raw URLs

Replace remote URLs with `raw.githubusercontent.com` URLs. This reduces Camo failures but still requires network access, depends on repository paths and branches, and cannot provide offline cards. Rejected for the offline and cross-device requirement.

### Localize all URL text

Download every URL found in card fields. This would turn ordinary reading links into large, incomplete archives and alter their intended behavior. Rejected because most URLs are references, not media.

### Localize media only — selected

Identify image and video resources in card HTML, resolve repository assets by filename or decoded Camo/Imgur identity, copy them into the deck media archive, and rewrite only media elements. Preserve ordinary links. This produces offline media while keeping card links unchanged and lets AnkiWeb sync the embedded files.

## Implementation

Use a small deterministic Python utility or one-off script. For each deck:

1. Extract the archive into a temporary directory.
2. Read notes from `collection.anki2`.
3. Detect image and video media references in every note field.
4. Prefer `data-canonical-src` when resolving Camo images; otherwise decode the hexadecimal origin payload and support Imgur IDs.
5. Give each embedded asset its basename and avoid filename collisions.
6. Rewrite only `<img src>`, `<video src>`, `<source src>`, and equivalent media references to local filenames. Leave anchor destinations unchanged unless separately approved.
7. Write changed note fields back to SQLite and recalculate Anki note checksums.
8. Update `media` with Anki's filename-to-filename mapping.
9. Repack the archive without changing unrelated collection data.
10. Report unresolved media and leave unresolved references unchanged unless explicitly approved otherwise.

## Verification

- Every media filename referenced by rewritten card HTML exists in the archive.
- Every archive media file has an entry in the `media` manifest.
- No rewritten media element uses Camo or Imgur URLs.
- SQLite opens successfully and note counts remain unchanged.
- ZIP archives contain `collection.anki2` and a valid `media` manifest.
- Run Anki's media check after importing a generated deck.
- Confirm Git diff contains only the intended design/script/deck changes.
