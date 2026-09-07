# Step 11 — Break bricks and keep score

## Learning idea

A collision can mutate three connected parts of game state: the world object, the numeric model, and the visible HUD. Keeping them synchronized is a core game-loop responsibility.

## Challenge to give the student

Handle collisions with objects tagged `"brick"`:

- destroy the exact brick received by the collision callback;
- decrement `bricksLeft` and add 100 to `score`;
- update `scoreLabel.text` to `SCORE ` followed by a four-digit, zero-padded score;
- reverse only the ball's y direction so play continues.

Do not add a win transition yet. Clearing the grid should leave an empty arena with a score of 3200 for this milestone.

## Instructor reference

```js
ball.onCollide("brick", (brick) => {
  brick.destroy()
  bricksLeft -= 1
  score += 100
  scoreLabel.text = "SCORE " + String(score).padStart(4, "0")
  ball.direction = k.vec2(ball.direction.x, -ball.direction.y)
})
```

Do not search the scene for a brick to remove. The callback already provides the specific tagged object that collided.

## Completion checks

- Each collision destroys its callback argument, decrements the remaining count once, and increases the score once.
- The HUD formats the sequence as `SCORE 0100`, `SCORE 0200`, and so on.
- The ball keeps its x direction and reverses y.
- With 32 bricks, the derived maximum is 3200; there is still no win-scene call.
- The preview is clean and the student confirms bricks disappear, the score advances by 100, and the ball continues.

## Hint ladder

1. List the three things that must agree after a hit: brick object, numeric state, and label text.
2. The callback parameter is the colliding brick; strings have `padStart(4, "0")`.
3. Provide the state-update lines but let the student write the label formatting and vector reflection before showing the complete handler.

## Advance

After validation, load `steps/12-win-and-restart.md`.
