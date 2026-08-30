# NoBo NoFo performance build 0.67

CONTENTS BASE ARTWORK PASS

0.67 leaves the working 0.66 search behaviour alone and changes only the Contents-page search trigger/base:

- Removes the old lone floating magnifier.
- Installs Stanley’s supplied full-width base strip (`assets/CONTENTS_BASE.png`) at the bottom of every Contents page.
- The complete strip — back, forward, share, book and magnifier artwork — is one large search trigger.
- Tapping anywhere on the strip opens the existing 0.66 Books-style search overlay.
- Search/arming/results behaviour is otherwise unchanged.
- Service-worker cache: `nobonofo-0.67`.
- Visible version marker: v0.67.

## GitHub upload
Replace these FOUR ROOT FILES:

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

And upload this ONE NEW ASSET to `/assets`:

- `CONTENTS_BASE.png`

No other assets need to be uploaded again.
