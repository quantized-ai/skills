# Step 5 — Prototype one brick

## Learning idea

Prototype one object recipe before generating a collection. This keeps shape, styling, collision area, and identity easy to inspect before loops enter the picture.

## Challenge to give the student

Create one collision-ready brick centered at `(GAME_WIDTH / 2, 108)`:

- add `BRICK_WIDTH = 72` and `BRICK_HEIGHT = 24` constants;
- use a rounded rectangle with radius `5` and a center anchor;
- fill it `#ff6b6b` and outline it with 2 pixels of `k.rgb(18, 23, 42)`;
- give it `k.area()` and the tag `"brick"`.

Do not add a loop or collision handler yet.

## Instructor reference

```js
k.add([
  k.rect(BRICK_WIDTH, BRICK_HEIGHT, { radius: 5 }),
  k.pos(GAME_WIDTH / 2, 108),
  k.anchor("center"),
  k.color("#ff6b6b"),
  k.outline(2, k.rgb(18, 23, 42)),
  k.area(),
  "brick",
])
```

The brick belongs inside the game scene after the walls and before the paddle. Constants belong with the other configuration values.

## Completion checks

- There is exactly one brick and it has the requested geometry and styling.
- It has both `area()` and the `"brick"` tag even though nothing collides with it yet.
- The preview is clean and the student confirms the brick is centered beneath the top wall.

Reinforce the distinction: `area()` supplies collision geometry; `"brick"` lets a later collision event select this category of object.

## Hint ladder

1. This is another `k.add()` component composition, like the paddle.
2. Reuse the component ideas from Step 2, but change the dimensions, radius, position, fill, outline, and tag.
3. Show the reference one component at a time rather than dumping the entire block.

## Advance

After validation, load `steps/06-procedural-brick-grid.md`.
