# NoBo NoFo performance build 0.62

REPAIR BUILD

0.61 failure identified:
- The Search button markup was never inserted because the code looked for the wrong Contents close-button class.
- The script then tried to attach an onclick handler to a nonexistent element, aborting JavaScript before shelf() ran.
- A stray duplicated handler fragment also remained.
- The Search result path referenced a nonexistent openChapter() function.

0.62:
- Search button is actually inserted into H2G2 Contents.
- Handler is null-safe.
- Broken duplicate fragment removed.
- Search-result navigation uses the existing render()/show("reading") machinery.
- Library image-map machinery retained.
- iOS selection suppression retained.
- Visible version marker: v0.62.
- No assets changed.
- Upload FOUR ROOT FILES ONLY.
