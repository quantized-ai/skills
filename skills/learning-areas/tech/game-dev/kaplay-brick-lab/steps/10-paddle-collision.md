# Step 10 — Bounce from the paddle

## Learning idea

`area()` supplies collision geometry and tags select the other object category. The contact point can shape the response: center hits go mostly upward, while edge hits steer sideways.

## Challenge to give the student

Register a collision between the ball and objects tagged `"paddle"`:

- ignore the event if the ball is already traveling upward;
- measure how far the ball is from the paddle center and divide by half the paddle width, producing an approximate -1 to 1 hit position;
- create a new normalized direction whose x is that hit position multiplied by `0.85` and whose y is `-1`.

Do not use a fixed y reflection; the paddle should give the player control over the outgoing angle.

## Instructor reference

```js
ball.onCollide("paddle", () => {
  if (ball.direction.y < 0) return
  const hitPosition = (ball.pos.x - paddle.pos.x) / (PADDLE_WIDTH / 2)
  ball.direction = k.vec2(hitPosition * 0.85, -1).unit()
})
```

This belongs inside the game scene after the ball exists. The Step 2 `area()` and `"paddle"` tag plus the Step 8 ball `area()` make this event possible; no `body()` physics component is needed.

## Completion checks

- The handler targets the `"paddle"` tag and rejects collisions while the ball travels upward.
- The outgoing x component depends on the center-relative hit position, and the new vector points upward and is normalized.
- The preview is clean.
- The student confirms a downward ball returns upward, center hits are nearly vertical, and off-center hits noticeably steer it.

## Hint ladder

1. First filter on the sign of `ball.direction.y`; negative y is upward on this canvas.
2. Normalize the horizontal offset by `(PADDLE_WIDTH / 2)`.
3. Give the `hitPosition` formula, then ask the student to construct and normalize an upward vector before showing the full handler.

## Advance

After validation, load `steps/11-break-bricks-and-score.md`.
