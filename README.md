# NoBo NoFo performance build 0.72

0.72 adds the first complete performance-state architecture to the working 0.71 build.

## H2G2 — two states
- ARMING route: H2G2 Search accepts the covert force word, then visibly becomes `improbability` and shows the three search results.
- Tapping a result now opens genuine Chapter 10 Infinite Improbability Drive text (pages 62–64 in the performance reader), not the H2G2 force chapter.
- Closing that Chapter 10 reading page returns to Library and H2G2 thereafter behaves like an ordinary Force book.
- RESET returns H2G2 to ARMING state.

## Performance states
- READY — pristine text; no force word active.
- ARMED — all $$$ sockets render the force word.
- PAID — exactly the selected payoff page retains the force word; every other socket renders clean text.

## PAID trigger
After the payoff has happened, press and hold the small bottom-right page-menu symbol (☷) for about 0.9 seconds while still on the payoff page. That exact book/chapter/page is retained as the sole Gopher page and the rest of the library is cleaned. A short vibration acknowledges the trigger when supported.

## RESET
The existing near-invisible bottom-left reset hotspot now performs a full manual reset: clears force word and PAID page, restores pristine text, restores H2G2 ARMING state, and returns to Library.

Session state is stored locally so the PAID evidence survives ordinary navigation/reopening until RESET.

## GitHub upload
Replace these FOUR ROOT FILES only:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

No assets changed.

Service-worker cache: `nobonofo-0.72`.
Visible version marker: v0.72.
