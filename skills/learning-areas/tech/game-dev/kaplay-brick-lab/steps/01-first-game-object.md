# Step 1 — Your first game object

## Learning idea

Kaplay builds a game from **game objects**. `k.add()` creates one object by composing small components: a shape, a position, an anchor, a color, and later behaviors.

## Challenge to give the student

Create one off-white rectangle that is 118 pixels wide and 16 pixels tall. Put the rectangle's **center** at `(GAME_WIDTH / 2, GAME_HEIGHT / 2)` by using a center anchor. Do not add movement, input, collisions, or a scene yet.

Tell them the observable result: the blank canvas should become a single horizontal block centered both horizontally and vertically.

## Instructor reference

Do not reveal this on the first attempt. Accept an equivalent component order.

```js
k.add([
  k.rect(118, 16),
  k.pos(GAME_WIDTH / 2, GAME_HEIGHT / 2),
  k.anchor("center"),
  k.color("#f7f8ff"),
])
```

The new object belongs below the Kaplay initialization and before the `pagehide` cleanup. Do not introduce paddle constants yet.

## Completion checks

- One `k.add()` call composes `rect`, `pos`, `anchor("center")`, and `color` components.
- The dimensions are 118 × 16 and the position uses both game dimensions divided by two.
- The preview builds and runs without runtime errors.
- The student confirms one centered off-white block is visible.

An optional, non-blocking experiment is to remove and restore `anchor("center")` and predict why the block shifts. Leave the center anchor restored.

## Hint ladder

1. A Kaplay object is an array of components passed to `k.add()`.
2. Use `k.rect`, `k.pos`, `k.anchor`, and `k.color`; the anchor decides which point on the rectangle the position refers to.
3. Offer only the `k.add([/* shape, position, anchor, color */])` skeleton before showing the instructor reference.

## Advance

After validation, load `steps/02-shape-the-paddle.md`.
