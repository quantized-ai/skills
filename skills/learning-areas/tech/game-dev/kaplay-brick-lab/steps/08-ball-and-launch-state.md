# Step 8 — Add the ball and launch state

## Learning idea

The ball needs a small state machine: **waiting** on the paddle, then **launched**. Its direction is a unit vector, kept separate from the speed that will be added next.

## Challenge to give the student

Add a ball that waits 26 pixels above the paddle:

- add `BALL_RADIUS = 9`;
- add `let launched = false` to the game scene's local state;
- create a center-anchored circle at `(paddle.pos.x, paddle.pos.y - 26)`, filled `#f7f8ff`, with a 3-pixel `k.rgb(255, 107, 107)` outline;
- give it `k.area()`, the tag `"ball"`, and custom data named `direction` set to the normalized vector `k.vec2(0.7, -1).unit()`;
- while it is not launched, update its x-position to follow the paddle and return early;
- make one `launch` function set `launched = true` and change the hint to `CLEAR THE GRID`;
- invoke that function on Space press or mouse press.

Do not move the launched ball yet. The point of this milestone is state and one-shot events.

## Instructor reference

The three scene state declarations should now include `score`, `bricksLeft`, and `launched`.

```js
const ball = k.add([
  k.circle(BALL_RADIUS),
  k.pos(paddle.pos.x, paddle.pos.y - 26),
  k.anchor("center"),
  k.color("#f7f8ff"),
  k.outline(3, k.rgb(255, 107, 107)),
  k.area(),
  { direction: k.vec2(0.7, -1).unit() },
  "ball",
])

const launch = () => {
  launched = true
  hintLabel.text = "CLEAR THE GRID"
}
k.onKeyPress("space", launch)
k.onMousePress(launch)

ball.onUpdate(() => {
  if (!launched) {
    ball.pos.x = paddle.pos.x
    return
  }
})
```

Handler order is flexible. There should be one shared launch function rather than duplicated state changes.

## Completion checks

- The ball has the exact geometry, appearance, area, tag, and normalized direction data.
- Before launch it stays horizontally attached to the moving paddle.
- Space and click are one-shot events that change the same state and update the retained hint label.
- After launch it stops following the paddle but intentionally remains stationary for now.
- The preview is clean and the student confirms both the waiting and launched states.

Explain that `unit()` makes direction length 1, so changing speed later will not change the intended angle.

## Hint ladder

1. Represent the mode with one scene-local boolean and branch inside `ball.onUpdate`.
2. Custom object data can be one plain object in the component array; use `k.vec2(...).unit()` for direction.
3. Show the ball component list and let the student write the waiting branch and shared launch function before revealing both.

## Advance

After validation, load `steps/09-game-loop-and-wall-bounces.md`.
