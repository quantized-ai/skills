# Step 3 — Make the first scene

## Learning idea

A scene is a recipe for one state of the game. Entering a scene runs its callback and creates that scene's objects, state, and event handlers. Re-entering it later gives the game a clean restart.

## Challenge to give the student

Create a scene named `"game"`, move the paddle creation inside its callback, and enter it once with `k.go("game")`. Also add the title `BRICK LAB` inside the scene at `(24, 19)`, size `16`, in `#f7f8ff`.

Keep Kaplay initialization and the `pagehide` cleanup outside the scene. The visible paddle should behave exactly as before; the title is the only new visual.

## Instructor reference

Do not reveal the complete structure before the student attempts the refactor.

```js
k.scene("game", () => {
  k.add([
    k.text("BRICK LAB", { size: 16 }),
    k.pos(24, 19),
    k.color("#f7f8ff"),
  ])

  const paddle = k.add([
    // Keep the complete Step 2 component list here.
  ])
})

k.go("game")
```

There should be one initial `k.go("game")`, after the scene definition. Constants can remain outside because they are configuration, not per-run state.

## Completion checks

- The scene is declared with `k.scene("game", callback)`.
- The title and paddle are created inside the callback.
- `k.go("game")` runs after the definition; there is no duplicate top-level paddle.
- The cleanup remains outside the scene.
- The preview is clean and the student confirms both the title and paddle appear.

Ask one short reasoning question after success: “What objects should be recreated if we call `k.go("game")` again?” The answer should include the title and paddle; do not block progress on wording.

## Hint ladder

1. Think of the scene callback as a function that constructs one fresh play session.
2. Put existing `k.add()` calls inside `k.scene("game", () => { ... })`, then call `k.go` after the closing brace.
3. Show the instructor structure with the paddle body left as a comment.

## Advance

After validation, load `steps/04-hud-and-arena.md`.
