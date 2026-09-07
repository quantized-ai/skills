import kaplay from "kaplay"
import "./styles.css"

const GAME_WIDTH = 720
const GAME_HEIGHT = 520

const root = document.getElementById("root")
if (root === null) throw new Error("The #root element is missing.")

const k = kaplay({
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  root,
  stretch: true,
  letterbox: true,
  background: "#12172a",
  global: false,
})

k.canvas.setAttribute("aria-label", "Kaplay Brick Lab learning canvas.")

// Build the game below this line.

window.addEventListener("pagehide", () => k.quit(), { once: true })
