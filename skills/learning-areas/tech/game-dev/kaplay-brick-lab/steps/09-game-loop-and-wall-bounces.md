# Step 9 — Run the game loop and bounce off walls

## Learning idea

Each frame advances the ball along its direction vector. A collision with a vertical boundary reflects x; a collision with a horizontal boundary reflects y. Radius-aware limits keep the visible circle inside the arena.

## Challenge to give the student

Make the launched ball move and handle the arena:

- add `BALL_SPEED = 320`;
- after the waiting branch in the existing `ball.onUpdate`, move by the direction vector scaled to that speed;
- calculate left, right, and top limits using the wall size and ball radius;
- at a side wall, reverse x only when the ball is traveling into that wall;
- at the top wall, reverse y only when the ball is traveling upward;
- if the ball's center falls below `GAME_HEIGHT + BALL_RADIUS`, re-enter the game scene.

The bottom remains open; falling out is a reset, not a bounce.

## Instructor reference

Extend the existing update rather than creating a competing second movement loop:

```js
ball.onUpdate(() => {
  if (!launched) {
    ball.pos.x = paddle.pos.x
    return
  }

  ball.move(ball.direction.scale(BALL_SPEED))
  const leftEdge = WALL_SIZE + BALL_RADIUS
  const rightEdge = GAME_WIDTH - WALL_SIZE - BALL_RADIUS
  const topEdge = PLAYFIELD_TOP + WALL_SIZE + BALL_RADIUS

  if (ball.pos.x <= leftEdge && ball.direction.x < 0) {
    ball.direction = k.vec2(-ball.direction.x, ball.direction.y)
  }
  if (ball.pos.x >= rightEdge && ball.direction.x > 0) {
    ball.direction = k.vec2(-ball.direction.x, ball.direction.y)
  }
  if (ball.pos.y <= topEdge && ball.direction.y < 0) {
    ball.direction = k.vec2(ball.direction.x, -ball.direction.y)
  }
  if (ball.pos.y > GAME_HEIGHT + BALL_RADIUS) k.go("game")
})
```

The direction-sign guards are required. Without them, a ball still outside a limit can flip every frame and jitter or stick.

## Completion checks

- The ball uses its stored normalized direction and `BALL_SPEED` in its one existing update handler.
- All three limits include `BALL_RADIUS`; the top also includes `PLAYFIELD_TOP` and `WALL_SIZE`.
- Reflection changes only the axis perpendicular to the wall and checks travel direction.
- Falling below the open bottom calls `k.go("game")`, which recreates the scene in its waiting state.
- The preview is clean.
- The student confirms diagonal launch, stable bounces on all three walls, and a fresh board/ball after a miss.

## Hint ladder

1. Ask which vector component should change sign at a vertical wall and at a horizontal wall.
2. Use `ball.direction.scale(BALL_SPEED)`, then compare the center position to radius-adjusted limits.
3. Give one complete left-wall condition; ask the student to mirror it for the right and top before showing the reference.

## Advance

After validation, load `steps/10-paddle-collision.md`.
