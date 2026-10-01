# NOBO NOFO — HANDOVER — 2026-10-02

## Production safety

Production `main` remains untouched at:

`93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`

Current QA-passed branch:

`controls-refresh-2026-10-01`

Paired GUTS branch:

`protocol-cleanup-2026-10-01`

Do not edit `main` casually. Promotion is the next job.

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

This branch currently targets the GUTS protocol test Worker:

`https://protocol-cleanup-2026-10-01-guts.stanjarin.workers.dev`

Phone QA PASSED:
- [WORD] persists across all GUTS books;
- HIDD ↔ SHW does not erase [WORD];
- refresh/new GUTS request does not erase [WORD];
- full PAID chain works;
- RSET clears the paid/armed word from GUTS.

## Test URL

`https://stanjarin.github.io/NoBoNoFo/`

GitHub Pages was manually set to this branch for QA.

## Next action

Promotion/deployment only:
1. create rollback point;
2. promote this tested branch to NoBo `main`;
3. replace the temporary GUTS preview base with the chosen production GUTS URL;
4. verify deployed NoBo is calling production GUTS;
5. run one final production smoke test with GUTS;
6. freeze release.

Do not repeat the whole QA campaign unless a regression appears.

## Promotion anchors — 2 October 2026

- phone-QA frozen NoBo anchor: `qa-pass-2026-10-02` @ `bb5de0ef986f42a0d89497c08995e5f243c223da`
- pre-promotion NoBo rollback: `rollback-pre-promotion-2026-10-02` @ `93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`
- paired phone-QA GUTS anchor: `59b6e1015cc7ff8bc51bedbd1a874d974b6710b5`
- promotion scope remains deployment only.
