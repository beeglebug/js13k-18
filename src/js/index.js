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
  checkMapChange()
  checkItems()
  pressedLastTick = {}
  map.items.forEach(item => item.update(TICK_INTERVAL))
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
