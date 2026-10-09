> **Current paired GUTS/NoBo operations handover (9 Oct 2026):** https://github.com/stanjarin/GUTS/blob/main/OPERATIONS_START_HERE.md . Read before investigating Cloudflare, SHW/HIDD, BR+ or the 18-book Reader. This file contains actual validated deployment wiring and the next visual QA task.

# START HERE

Fresh ewe: read `NOBO_HANDOVER_2026-10-02.md` first, then this README.

# NoBo NoFo — control/protocol refresh

Working branch: `controls-refresh-2026-10-01`

`main` was promoted on 2 October 2026; pre-promotion rollback is `rollback-pre-promotion-2026-10-02` at `93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`.

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

Production controller target:
`https://ebooks.fyi`

Phone-QA code is frozen on `qa-pass-2026-10-02`; final production-domain verification and smoke QA are still pending.


## Phone QA PASS — 2026-10-02

Passed on iPhone: [WORD] persists across books and HIDD/SHW; refresh preserves it; 6+ second dwell/departure reaches PAID; RSET clears the paid/armed word from GUTS. Protocol cleanup PASSED on test branches. Main remains untouched pending promotion.

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

## Immediate handover update — 2 Oct 2026

Current NoBo now includes the back-room **Corpus Workshop**.

Entry:
- book open → **EDIT**
- Library → long-press **MORE → DATA**

Workshop:
- **GUTS / NoBo**
- **AIRLOCK / CORPUS**
- current book/chapter/page carried across where possible
- **DONE / CANCEL**
- **IMPORT / EXPORT BOOK / RESET BOOK**
- **RETURN TO NOBO**

AIRLOCK edits prepared `$$$` text and shows full genuine-page context with **⟦ AIRLOCK HERE ⟧**.
CORPUS edits genuine page text/chapter heading.
Edits remain local until exported; browser workshop does not write directly to GitHub.

Rollback before workshop:
`rollback-pre-corpus-workshop-2026-10-02`

Read `NOBO_CORPUS_WORKSHOP_HANDOVER_2026-10-02.md` before further workshop changes.

Paired GUTS has completed a full 18-book airlock placement/retention sweep with machine QA PASS; phone/visual spot-check of that repaired prepared layer is the next action.
