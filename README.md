# NoBo NoFo — control-panel refresh

Working branch: `controls-refresh-2026-10-01`

`main` remains untouched at `93d4ade5fee65d9931c5c6ad1b1b25cad8c18235`.

## Current branch build

**v6.19C**

Normal live magic flow:

`READY → ARMED → PAID → RSET`

- **RSET** clears local magic state, returns to Library, and sends the existing internal GUTS `CLEAN` reset signal when the performer PIN is available.
- The former NoBo **CLEAN** state/EDIT long-press control is inactive; CLEAN survives only as the internal GUTS reset protocol term.
- **SHW / HIDD** displays the current GUTS site mode and toggles it.
- **BR− / BR+** displays the current Browse state and toggles it.
- **DATA** exposes **IMPRT / EXPRT / DEPRT**.
- **READY √ / X** is a passive local magic-state indicator.
- **PIN** is a passive credential indicator: green when a validated ARM PIN is stored, red when none is stored.
- **>** closes the control panel.
- **EDIT** is single-purpose again: ordinary tap opens the editor.

## Safety

All work is confined to the branch above. Do not merge to `main` until phone QA passes.
