# Step 4 — Build the HUD and arena

## Learning idea

The canvas is a coordinate system. The HUD occupies its top band, and three rectangles communicate the playable boundary. There is deliberately no bottom wall: letting the ball fall out will become the lose condition.

## Challenge to give the student

Build the final static frame around the paddle:

- add `WALL_SIZE = 10` and `PLAYFIELD_TOP = 72`;
- start the scene with `let score = 0`;
- add a right-aligned `SCORE 0000` label at `(GAME_WIDTH - 24, 19)`, size `16`, and retain it as `scoreLabel`;
- add a centered `SPACE OR CLICK TO LAUNCH` hint at `(GAME_WIDTH / 2, 45)`, size `12`, and retain it as `hintLabel`;
- color the score like the title and the hint `#91a0c8`;
- add a 10-pixel top wall at `y = PLAYFIELD_TOP` and side walls from that y-coordinate to the bottom, all in `k.rgb(43, 53, 84)`.

Leave the bottom open.

## Instructor reference

The state and objects below belong inside the game scene, before the paddle.

```js
let score = 0

const scoreLabel = k.add([
  k.text("SCORE 0000", { size: 16 }),
  k.pos(GAME_WIDTH - 24, 19),
  k.anchor("topright"),
  k.color("#f7f8ff"),
])
const hintLabel = k.add([
  k.text("SPACE OR CLICK TO LAUNCH", { size: 12 }),
  k.pos(GAME_WIDTH / 2, 45),
  k.anchor("center"),
  k.color("#91a0c8"),
])

const wallColor = k.rgb(43, 53, 84)
k.add([
  k.rect(GAME_WIDTH, WALL_SIZE),
  k.pos(0, PLAYFIELD_TOP),
  k.color(wallColor),
])
k.add([
  k.rect(WALL_SIZE, GAME_HEIGHT - PLAYFIELD_TOP),
  k.pos(0, PLAYFIELD_TOP),
  k.color(wallColor),
])
k.add([
  k.rect(WALL_SIZE, GAME_HEIGHT - PLAYFIELD_TOP),
  k.pos(GAME_WIDTH - WALL_SIZE, PLAYFIELD_TOP),
  k.color(wallColor),
])
```

## Completion checks

- The HUD contains the existing title plus retained `scoreLabel` and `hintLabel` objects at the exact positions and anchors.
- Exactly three wall rectangles form the top, left, and right boundaries beginning at y = 72.
- No bottom wall or wall collision components are added; these walls are visual, and ball bounds will be calculated later.
- The preview is clean and the student confirms the HUD alignment and open-bottom arena.

## Hint ladder

1. Text is a game object too; compose `text`, `pos`, `anchor`, and `color` components.
2. The score uses `anchor("topright")`, while the centered hint uses `anchor("center")`. Rectangles default to top-left positioning.
3. Give one wall formula at a time, beginning with the horizontal top wall.

## Advance

After validation, load `steps/05-one-brick.md`.
