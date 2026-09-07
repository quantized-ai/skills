# Step 7 — Move and constrain the paddle

## Learning idea

Held input is an event that repeats while a control is active. A separate per-frame update enforces the paddle's boundary no matter whether keyboard or pointer input moved it.

## Challenge to give the student

Make the paddle controllable inside the game scene:

- add `PADDLE_SPEED = 520`;
- while Left Arrow or A is held, move it left; while Right Arrow or D is held, move it right;
- on pointer movement, set the paddle's x-position to the pointer's x-position;
- on every paddle update, clamp its center so neither edge can cross the two side walls.

Both input methods must share the same boundary rule. Do not add the ball yet.

## Instructor reference

Place these handlers after the paddle is created:

```js
k.onKeyDown(["left", "a"], () => paddle.move(-PADDLE_SPEED, 0))
k.onKeyDown(["right", "d"], () => paddle.move(PADDLE_SPEED, 0))
k.onMouseMove((position) => {
  paddle.pos.x = position.x
})

paddle.onUpdate(() => {
  const halfPaddle = PADDLE_WIDTH / 2
  paddle.pos.x = k.clamp(
    paddle.pos.x,
    WALL_SIZE + halfPaddle,
    GAME_WIDTH - WALL_SIZE - halfPaddle,
  )
})
```

`paddle.move(speed, 0)` is frame-rate independent in Kaplay; do not multiply the speed by a guessed frame duration.

## Completion checks

- `onKeyDown`, not one-shot `onKeyPress`, handles both requested key pairs with opposite speed signs.
- Pointer movement changes `paddle.pos.x`.
- The clamp accounts for both `WALL_SIZE` and half the center-anchored paddle width. Its valid center range is 69 through 651.
- The preview is clean.
- The student confirms keyboard and pointer movement both work and neither can push the paddle through a side wall.

## Hint ladder

1. Use a held-key event for continuous movement and keep the boundary check separate from input.
2. Kaplay supplies `k.onKeyDown`, `k.onMouseMove`, `paddle.move`, `paddle.onUpdate`, and `k.clamp`.
3. Ask the student to calculate the leftmost legal center x-coordinate from the 10-pixel wall and 59-pixel half-paddle before giving the clamp reference.

## Advance

After validation, load `steps/08-ball-and-launch-state.md`.
