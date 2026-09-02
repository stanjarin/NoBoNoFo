# NoBo NoFo — PASS 5D VIEWPORT FIX

Targeted correction after 5C iPhone field test.

- Removes the actual literal backslash-n from the document head.
- Replaces CSS `min(100vw,421px)` Library sizing with older-iPhone-safe
  `width:100%; max-width:421px`.
- Hard-clamps html/body/app to viewport width to prevent intrinsic image/UI overflow.
- Fixed Library base explicitly scales within the wrapper.
- MORE maintenance hot zone remains wholly inside the visible rightmost cell.
- No book data changed.
- No Pass 4 state logic changed.
