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

## Pass 4 — magic engine v1

Implemented state foundation:

- READY -> ARMED -> AUTO-PAID/PAID -> CLEAN
- RESET -> READY
- Session state is held in `sessionStorage`, so ordinary in-session navigation preserves it.
- ARMED pages resolve deliberately prepared `$$$` sockets to the force word.
- A landing page qualifies after 2.2 seconds stationary dwell.
- The next page move changes ARMED to PAID and records the departed payoff page.
- In PAID, only that recorded payoff page remains eligible to resolve its socket.
- CLEAN deliberately purges the force word; it never happens automatically.
- RESET deliberately returns to READY.
- No corpus prose is automatically rewritten: only explicit `$$$` sockets are substituted.
- Editorial mode remains manual SAVE PAGE.

Temporary desktop test controls (not intended as final performance UI):
- `F` — arm a force word.
- `C` — CLEAN, when PAID.
- `R` — RESET to READY.

Still to integrate in Pass 4 before approval:
- H2G2 ARMING Search route and visible “improbability” camouflage.
- Prepared author-specific `$$$` payoff grafts/sockets in the corpus.
- Touch/covert iPhone arming gesture replacing the temporary desktop `F` test control.
- Full iPhone state-transition torture test.
