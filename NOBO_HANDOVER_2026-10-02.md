# NOBO NOFO — HANDOVER — 2026-10-02

## Production safety

Production `main` was promoted on 2 October 2026 from the phone-QA passed branch. Pre-promotion rollback remains frozen at:

`93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`

Current QA-passed branch:

`controls-refresh-2026-10-01`

Paired GUTS branch:

`protocol-cleanup-2026-10-01`

Do not edit `main` casually. Production release passed and is frozen.

## Canonical control architecture

**NoBo commands. GUTS executes.**

NoBo performer flow:

**READY → ARMED → PAID → RSET**

Remote protocol sent to GUTS:
- RSET sends READY
- H2G2 covert arm sends ARMED + force word
- PAID remains local in GUTS after the qualified 6-second dwell

No live CLEAN control/state remains in NoBo.

Visibility is independent:
- SHW
- HIDD

Auth is independent:
- ARM PIN validates non-mutatingly
- PIN label is green only after successful validation

Existing PIN vocabulary:
- ARM PIN = `arm`
- SHOW PIN = `show`

Do not call SHOW PIN a third “site PIN” in user-facing instructions.

## Current panel

Long-press MORE:

`RSET • SHW/HIDD • BR−/BR+ • DATA [IMPRT / EXPRT / DEPRT] • READY √/X • PIN • >`

Meanings:
- RSET: NoBo READY + remote GUTS READY
- SHW/HIDD: visibility only
- BR−/BR+: Browse state
- DATA: reveal import/export/deport
- READY √/X: passive NoBo state
- PIN: passive validated ARM-PIN state
- >: close panel

EDIT remains single-purpose.
H2G2 SEARCH is the covert arm action.

## QA-passed implementation

Build: **v6.20P**

Production NoBo now targets:

`https://ebooks.fyi`

The phone-QA anchor remains preserved on `qa-pass-2026-10-02`; only the production base URL changed after that anchor.

Phone QA PASSED:
- [WORD] persists across all GUTS books;
- HIDD ↔ SHW does not erase [WORD];
- refresh/new GUTS request does not erase [WORD];
- full PAID chain works;
- RSET clears the paid/armed word from GUTS.

## Test URL

`https://stanjarin.github.io/NoBoNoFo/`

GitHub Pages was manually set to this branch for QA.

## Release status

**PRODUCTION RELEASE PASSED / FROZEN — 2 October 2026**

Completed:
1. rollback point created;
2. tested NoBo branch promoted to `main`;
3. production target changed to `https://ebooks.fyi`;
4. `ebooks.fyi` connected to Cloudflare and attached to the production GUTS Worker;
5. deployed NoBo/GUTS production path verified;
6. final phone smoke test PASSED:
   **RSET → ARM → GUTS → prepared page → 6+ sec → PAID persistence → RSET → cleared**.

Do not repeat the QA campaign unless a specific regression appears.

## Promotion anchors — 2 October 2026

- phone-QA frozen NoBo anchor: `qa-pass-2026-10-02` @ `bb5de0ef986f42a0d89497c08995e5f243c223da`
- pre-promotion NoBo rollback: `rollback-pre-promotion-2026-10-02` @ `93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`
- paired phone-QA GUTS anchor: `59b6e1015cc7ff8bc51bedbd1a874d974b6710b5`
- promotion scope remains deployment only.


## Final production pass — 2 October 2026

Stanley reported **“All systems nominal!”**

Frozen runtime anchor:
- NoBo `release-2026-10-02-production-pass` @ `6dcd4b33429788f413f6fd80e503f08553eda0cd`
- paired GUTS `release-2026-10-02-production-pass` @ `4e6c5c4835fb858ba10409962af694657d921d77`

No functional work is open.

---

# LATEST IMMEDIATE HANDOVER UPDATE — 2 October 2026, wall-hit

**THIS SECTION OVERRIDES EARLIER DATA / EDIT / NEXT-ACTION wording above.**

## Current live NoBo state

Live URL:
`https://stanjarin.github.io/NoBoNoFo/`

Current workshop runtime commit before handover docs:
`a59f5bbc18192ebaf11ba44991ce86cfb9cc0dc3`

GitHub Pages source branch `controls-refresh-2026-10-01` was deliberately fast-forwarded to the same runtime commit because Pages was otherwise serving stale DATA behaviour.

Rollback before workshop:
`rollback-pre-corpus-workshop-2026-10-02`.

## DATA / EDIT now open CORPUS WORKSHOP

The old DATA submenu is superseded.

Entry routes:
- **Book open → EDIT** opens Corpus Workshop on that current book/chapter/page.
- **Library → long-press MORE → DATA** opens Corpus Workshop; if no current book exists, GUTS Pooh is the fallback.

Workshop axes:
- corpuscule: **GUTS / NoBo**
- operation: **AIRLOCK / CORPUS**

AIRLOCK:
- shows full genuine page context;
- marks **⟦ AIRLOCK HERE ⟧**;
- textarea edits the prepared `$$$` airlock paragraph;
- exactly one socket required.

CORPUS:
- edits genuine page text;
- edits chapter heading;
- does not automatically repaginate;
- prepared layer remains separate.

Both modes:
- **DONE** = accept edit into local workshop copy;
- **CANCEL** = discard current unsaved edit and redraw;
- **IMPORT**
- **EXPORT BOOK**
- **RESET BOOK**
- **RETURN TO NOBO**

The workshop is intentionally back-room tooling; no separate home-screen app/icon was created.

## Storage / deployment semantics

Workshop edits are local browser working copies until exported.
The browser workshop does **not** write directly to GitHub.
This is intentional current behaviour.

For GUTS books, the workshop loads the canonical JSON from GUTS `main/public/...`.
For NoBo books, it loads NoBo book JSON.

## Phone checks already seen

Stanley confirmed on iPhone:
- Corpus Workshop appears;
- EDIT route can open the current NoBo book/page;
- GUTS/NoBo and AIRLOCK/CORPUS controls are visible;
- DONE/CANCEL are visible;
- AIRLOCK genuine-context preview works;
- full-page context exposed a real corpus placement issue, which then triggered the GUTS airlock sweep.

This is not yet a formal exhaustive workshop QA campaign.

## Paired GUTS state

GUTS has now completed and promoted a full prepared-layer airlock placement/retention sweep.
Read GUTS:
- `GUTS_HANDOVER_2026-10-02.md` latest section;
- `docs/checkpoints/2026-10-02_airlock-placement-retention-sweep.md`.

The sweep changed prepared corpus only; NoBo runtime/controller machinery was not changed by it.

## Exact next action for fresh ewe

1. Treat current NoBo workshop as the back-room editor.
2. Do not restore the old EDIT modal or old DATA submenu.
3. If continuing GUTS work, first complete the pending visual/phone spot-check of the newly repaired GUTS prepared layer.
4. If continuing workshop work, fix only observed defects; do not redesign the UI gratuitously.
