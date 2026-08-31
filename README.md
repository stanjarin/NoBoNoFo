# NoBo NoFo — Performance Build 0.73

## Changes from 0.72
- Fixed H2G2 force substitution on the first regular chapter page.
- PAID now gives explicit visual confirmation (`PAID`) in addition to attempted haptics.
- RESET hotspot now opens a visible confirmation prompt; completed reset displays `RESET COMPLETE`.
- Huck Finn is the full-book-after-PAID proof of concept: once Huck is PAID, its Contents expands to the whole book and normal navigation uses the complete extracted public-domain text, except the exact payoff page remains the doctored/Gopher page.
- H2G2 arming/force split retained.
- Session states remain READY → ARMED → PAID; RESET returns to READY.
- Service-worker cache bumped to 0.73.

## GitHub upload
Upload/replace these four root files only: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md`. No assets changed.

Live URL: https://stanjarin.github.io/NoBoNoFo/
