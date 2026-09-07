# Step 12 — Win, restart, and verify the complete game

## Learning idea

A scene transition closes the full game loop. The game scene passes final data into a win scene, and replay constructs a fresh game with reset local state and objects.

## Challenge to give the student

Finish Brick Lab:

1. After the brick collision updates the count and score, go to `"win"` with the score when `bricksLeft === 0`.
2. Define a `"win"` scene that receives `score` and displays:
   - `BOARD CLEARED`, size `54`, centered at y = 205 in `#67d5b5`;
   - the four-digit `SCORE ...`, size `22`, centered at y = 275 in `#f7f8ff`;
   - `SPACE OR CLICK TO PLAY AGAIN`, size `14`, centered at y = 360 in `#ffd166`.
3. Use one restart function that enters `"game"` on Space press or mouse press.
4. Keep the single initial `k.go("game")` after both scene definitions.
5. Replace the temporary canvas label with the final control description:

   `Brick Lab game. Move with the arrow keys or A and D. Press Space or click to launch the ball.`

Keep the existing one-time `pagehide` cleanup.

## Instructor reference

Add this terminal check to the brick collision handler:

```js
if (bricksLeft === 0) k.go("win", score)
```

Define the second scene after the game scene and before the initial `k.go("game")`:

```js
k.scene("win", (score) => {
  k.add([
    k.text("BOARD CLEARED", { size: 54 }),
    k.pos(GAME_WIDTH / 2, 205),
    k.anchor("center"),
    k.color("#67d5b5"),
  ])
  k.add([
    k.text("SCORE " + String(score).padStart(4, "0"), { size: 22 }),
    k.pos(GAME_WIDTH / 2, 275),
    k.anchor("center"),
    k.color("#f7f8ff"),
  ])
  k.add([
    k.text("SPACE OR CLICK TO PLAY AGAIN", { size: 14 }),
    k.pos(GAME_WIDTH / 2, 360),
    k.anchor("center"),
    k.color("#ffd166"),
  ])

  const restart = () => k.go("game")
  k.onKeyPress("space", restart)
  k.onMousePress(restart)
})
```

## Final completion gate

Reread `/src/main.js`, `/package.json`, `/src/styles.css`, and `/index.html`, then run a fresh preview and inspect its iframe status. Verify all of these before declaring the course complete:

- Kaplay is pinned to `3001.0.19`; the entry remains `/src/main.js`; the canvas is 720 × 520 with the supplied responsive shell.
- The game has one open-bottom arena, title, launch hint, score label, four colored rows of eight bricks, a constrained keyboard/pointer paddle, and an attached ball.
- Space or click launches; the ball moves at 320, bounces at left/right/top, resets on a miss, steers from the paddle, destroys bricks, and scores 100 each.
- The last of 32 bricks produces `SCORE 3200`, enters the win scene, and passes that score into its label.
- Space or click from the win scene creates a fresh 32-brick game with `SCORE 0000`, the original hint, and an unlaunched ball.
- The final aria-label is exact, `pagehide` quits Kaplay once, the build status is `success`, the iframe is `running`, and it has zero runtime errors.

The tools cannot play the canvas. Ask the student to test launch, both paddle inputs, a miss, scoring, the final transition, and both replay inputs. To test the transition faster, they may temporarily set `BRICK_COLUMNS = 1`; with four color rows, that test correctly ends at `SCORE 0400`. Require the value to be restored to `8` and rerun before completion. The final 3200 result can then be established from the restored 32-brick source and 100-point rule; do not claim the student played through 3200 unless they actually did.

## Hint ladder

1. Scene callbacks can receive extra arguments passed by `k.go(sceneName, value)`.
2. Put the terminal count check inside the brick collision handler after state updates, and define the new scene before the one initial `k.go("game")`.
3. Show the win-scene skeleton with its three `k.add()` calls and one shared restart function before revealing the exact instructor reference.

## Close the course

Summarize the concepts the student actually used: game objects, components, coordinates/anchors, scenes, events, per-frame updates, vectors, collision areas/tags, derived layouts, state/HUD synchronization, and scene transitions. Offer optional next experiments—lives, multiple levels, sounds, or power-ups—but do not implement them unless asked.
