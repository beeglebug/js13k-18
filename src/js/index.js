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
  if (state !== STATE_MENU) {
    map.items.forEach(item => item.update(TICK_INTERVAL))
    checkMapChange()
    checkItems()
  }
  render()
}

function reset () {
  resetMap()
  player.reset()
  map = world.getCurrentRoom()
}

start()
