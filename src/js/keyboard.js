let pressed = {}

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68

addEventListener('keydown', onKeydown)
addEventListener('keyup', onKeyup)
addEventListener('blur', onBlur)

function onKeydown (e) {
  pressed[e.which] = true
  handle()
  render()
}

function onKeyup (e) {
  pressed[e.which] = false
}

function onBlur () {
  pressed = {}
}

const isDown = key => !!pressed[key]

function handle () {
  let x = player.x
  let y = player.y

  if (isDown(KEY_W)) y -= 1
  if (isDown(KEY_A)) x -= 1
  if (isDown(KEY_S)) y += 1
  if (isDown(KEY_D)) x += 1

  const tile = getTileAt(x, y)
  if (tile && tile.solid) return

  let mapChanged = false

  if (y < 0) {
    worldPos.y -= 1
    y = MAP_HEIGHT - 1
    mapChanged = true
  } else if (y >= MAP_HEIGHT) {
    worldPos.y += 1
    y = 0
    mapChanged = true
  } else if (x >= MAP_WIDTH) {
    worldPos.x += 1
    x = 0
    mapChanged = true
  } else if (x < 0) {
    worldPos.x -= 1
    x = MAP_WIDTH - 1
    mapChanged = true
  }

  if (mapChanged) map = getMap()

  player.x = x
  player.y = y
}
