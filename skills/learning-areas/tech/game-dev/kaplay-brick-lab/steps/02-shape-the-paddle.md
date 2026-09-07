# Step 2 — Shape the paddle

## Learning idea

Components stay independent: one controls geometry, another position, another appearance, and `area()` supplies a collision shape. Saving the object returned by `k.add()` gives later code a handle to move and inspect it.

## Challenge to give the student

Turn the centered block into the game's final paddle:

- declare `PADDLE_WIDTH` as `118`;
- move it to `(GAME_WIDTH / 2, GAME_HEIGHT - 42)`;
- keep it 16 pixels tall, round it with radius `8`, and keep the center anchor;
- color it `#f7f8ff` and give it a 3-pixel mint outline using `k.rgb(103, 213, 181)`;
- add `k.area()` and the tag `"paddle"` so it will be collision-ready later;
- store the returned object as `const paddle`.

Do not add controls yet.

## Instructor reference

Do not paste this up front.

```js
const PADDLE_WIDTH = 118

const paddle = k.add([
  k.rect(PADDLE_WIDTH, 16, { radius: 8 }),
  k.pos(GAME_WIDTH / 2, GAME_HEIGHT - 42),
  k.anchor("center"),
  k.color("#f7f8ff"),
  k.outline(3, k.rgb(103, 213, 181)),
  k.area(),
  "paddle",
])
```

Place the constant with the game dimensions. Replace the Step 1 object rather than leaving a second rectangle behind.

## Completion checks

- There is exactly one learner-created block, stored as `paddle`.
- Its size, rounded corners, position, fill, outline, `area()`, and `"paddle"` tag match the challenge.
- The preview is clean and the student confirms the styled paddle sits near the bottom center.

Explain that `area()` answers “where can this object collide?” while the tag answers “which group of objects is this?” No collision handler is needed yet.

## Hint ladder

1. Keep each concern as one entry in the same component array.
2. `k.rect` accepts `{ radius: 8 }`; `k.outline` accepts a width and color; a plain string in the array is a tag.
3. Show only the `const paddle = k.add([...])` outline with the component names before revealing values.

## Advance

After validation, load `steps/03-first-scene.md`.
