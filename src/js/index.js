function start () {
  tiles.src = './tiles.png'
  sprites.src = './sprites.png'
  font.src = './font.png'
  canvas.width = GAME_WIDTH
  canvas.height = GAME_HEIGHT
  reset()
  render()
  setInterval(tick, TICK_INTERVAL)
}

function tick() {
  input()
  pressedLastTick = {}
  if (state === STATE_FALLING) {
    fallCounter += TICK_INTERVAL
    if (fallCounter > 400) {
      player.sx = 48
    }
    if (fallCounter > 1000) {
      fallCounter = 0
      if (player.damage(1)) return
      player.sx = 0
      state = STATE_MOVING
      player.x = map.entrance.x
      player.y = map.entrance.y
    }
  }
  render()
}

function reset () {
  resetMap()
  player.reset()
  map = world.getCurrentRoom()
}



function flat (arr) {
  return arr.reduce((acc, val) => acc.concat(val), [])
}

start()
