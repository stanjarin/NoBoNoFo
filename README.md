# NoBo NoFo performance build 0.63

SEARCH / ARMING REPAIR + REDESIGN

Cause of 0.62 arming failure:
- Search submit called `setForce(...)`, but `setForce` did not exist.
- JavaScript therefore stopped at the moment Return was pressed.

0.63:
- Adds working `setForce()` persistence.
- Search now uses a real form submit rather than relying on keydown/Enter.
- iPhone keyboard Return is labelled Search via `enterkeyhint`.
- On submit: covert word is stored -> field visibly becomes `improbability` -> keyboard dismisses -> plausible results appear.
- Search screen redesigned as a compact, ordinary ebook-style search field/results list.
- H2G2 result tap returns to the existing reader machinery.
- Library/image-map, cover slide, selection suppression, first-complete-sentence rule all retained.
- Visible marker: v0.63.
- No assets changed.

UPLOAD FOUR ROOT FILES ONLY.
