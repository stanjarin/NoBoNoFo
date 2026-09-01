# NoBo NoFo — PASS 3 Nine-Book Reader v1

PASS 3 replaces the old inline/Huck-only proof-of-concept with nine external book JSON files.

Implemented:
- nine-book Library
- lazy book loading
- Contents for every book
- chapter/page navigation across chapter boundaries
- external `/books/<id>.json` content; no book corpus embedded in app logic
- first-person EDITORIAL MODE
- direct visible-page text editing
- chapter-heading editing
- local persistence in browser localStorage
- explicit chapter repagination after edits
- export corrected book JSON
- import corrected book JSON
- editorial mode is separate from ordinary reader mode

Not in this pass:
- NoBo force/magic states
- H2G2 arming
- final visual camouflage/assets
- final typography/status-bar work
- corpus rats & mice

PASS 4 restores READY → ARMED → AUTO-PAID/PAID → CLEAN on top of this reader.

## Pass 3 editor fix
- Editorial text and heading changes now autosave locally while typing.
- Blur/keyboard dismissal commits again.
- SAVE PAGE remains as an explicit belt-and-braces control.
- REPAGINATE CHAPTER remains deliberate; autosave does not silently repaginate.
- Service-worker cache bumped to `nobonofo-pass3-done-save-v2`.
