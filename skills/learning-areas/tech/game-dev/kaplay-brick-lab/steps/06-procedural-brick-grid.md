# Step 6 — Generate the brick grid

## Learning idea

Games often turn one tested object recipe into level data. An array controls the rows, nested loops control row and column indices, and a small position formula keeps the complete grid centered.

## Challenge to give the student

Replace the prototype brick with a centered 4 × 8 grid. Do not hand-write 32 objects.

- add `BRICK_COLUMNS = 8`, `BRICK_GAP = 8`, and `BRICK_COLORS = ["#ff6b6b", "#ffd166", "#67d5b5", "#6ecbff"]`;
- derive the total grid width from the column count, brick width, and gaps;
- derive the first brick's center x-coordinate, then use nested row/column loops;
- place columns one brick-width-plus-gap apart and rows one brick-height-plus-gap apart, starting at y = 108;
- use the row's array entry as its color;
- add `let bricksLeft = BRICK_COLORS.length * BRICK_COLUMNS` inside the scene.

Changing the column count or gap should keep the grid centered.

## Instructor reference

Replace the complete single-brick call with this pattern:

```js
let bricksLeft = BRICK_COLORS.length * BRICK_COLUMNS

const gridWidth = BRICK_COLUMNS * BRICK_WIDTH +
  (BRICK_COLUMNS - 1) * BRICK_GAP
const startX = (GAME_WIDTH - gridWidth) / 2 + BRICK_WIDTH / 2

for (let row = 0; row < BRICK_COLORS.length; row += 1) {
  for (let column = 0; column < BRICK_COLUMNS; column += 1) {
    k.add([
      k.rect(BRICK_WIDTH, BRICK_HEIGHT, { radius: 5 }),
      k.pos(
        startX + column * (BRICK_WIDTH + BRICK_GAP),
        108 + row * (BRICK_HEIGHT + BRICK_GAP),
      ),
      k.anchor("center"),
      k.color(BRICK_COLORS[row]),
      k.outline(2, k.rgb(18, 23, 42)),
      k.area(),
      "brick",
    ])
  }
}
```

The line break in `gridWidth` is optional. The formula should evaluate to a 632-pixel grid whose brick centers run from x = 80 through x = 640.

## Completion checks

- The prototype is gone and nested loops produce exactly 32 bricks: 8 columns for each of 4 colors.
- Horizontal and vertical gaps are 8 pixels, row centers are y = 108, 140, 172, and 204, and the complete grid is centered.
- Every generated object retains the Step 5 shape, area, and tag.
- `bricksLeft` is derived rather than hard-coded to 32.
- The preview is clean and the student confirms four aligned rows of eight bricks.

## Hint ladder

1. First calculate the width occupied by all bricks plus only the gaps *between* them.
2. The first x-coordinate is the grid's left edge plus half a brick because each brick uses a center anchor.
3. Provide the `gridWidth` and `startX` formulas, then leave the two loop bodies for the student before showing the full reference.

## Advance

After validation, load `steps/07-move-and-constrain-paddle.md`.
