# START HERE

Fresh ewe: read `NOBO_HANDOVER_2026-10-02.md` first, then this README.

# NoBo NoFo — control/protocol refresh

Working branch: `controls-refresh-2026-10-01`

`main` remains untouched at `93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`.

## Test build

**v6.20P**

NoBo is the performer/controller. GUTS executes NoBo's commands.

Live performer protocol:
`READY → ARMED → PAID → RSET`

- **RSET** sets NoBo to READY and sends **READY** to GUTS.
- **ARM** sends **ARMED + force word** to GUTS.
- **PAID** is local execution state in each reader after the qualified 6-second dwell.
- **CLEAN is not a live NoBo/GUTS protocol state.**
- **SHW / HIDD** changes visibility only. It must never alter READY/ARMED/word.
- **PIN** validates through the non-mutating GUTS `/api/performer/validate` endpoint.
- The PIN label is green only after successful validation; rejection clears the stored validation.
- **DATA** exposes IMPRT / EXPRT / DEPRT.
- **EDIT** is single-purpose.

For safe QA this branch talks to the GUTS branch preview:
`https://protocol-cleanup-2026-10-01-guts.stanjarin.workers.dev`

Do not merge to `main` until phone QA passes.


## Phone QA PASS — 2026-10-02

Passed on iPhone: [WORD] persists across books and HIDD/SHW; refresh preserves it; 6+ second dwell/departure reaches PAID; RSET clears the paid/armed word from GUTS. Protocol cleanup PASSED on test branches. Main remains untouched pending promotion.
