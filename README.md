# NoBo NoFo performance build 0.66

SEARCH OVERLAY REBUILD

0.66 replaces the floating two-row search popup with the reader grammar established by the Books/Kindle references:

- Small blue magnifier remains the ordinary Contents-page search prompt.
- Tapping it opens a Books-style light search overlay.
- Search field and Cancel sit at the top.
- Initial search area is blank: no Recent Searches, no decorative rows.
- Native keyboard appears immediately.
- Performer types the force word and presses keyboard Search.
- The force word is stored, the field visibly changes to `improbability`, keyboard dismisses, and H2G2-style results appear immediately below.
- Tapping any result continues to the H2G2 reading page.
- Existing library, cover transition, chapter navigation, page sliding and force-word mechanics are preserved.
- No assets changed.
- Service-worker cache: `nobonofo-0.66`.
- Visible version marker: v0.66.

## GitHub upload
Upload/replace FOUR ROOT FILES ONLY:

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

Do NOT re-upload `/assets`; no asset files changed in 0.66.
