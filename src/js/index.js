function start () {
  tiles.src = './tiles.png'
  sprites.src = './sprites.png'
  font.src = './font.png'
  menu.src = './menu.png'
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
    updateTiles()
    map.items.forEach(item => item.update(TICK_INTERVAL))
    checkMapChange()
    checkItems()
    checkTiles()
  }
  render()
}

function reset () {
  resetMap()
  player.reset()
  map = world.getCurrentRoom()

  // TODO uncomment for release
  // textStack = [
  //   'THE BRIDGE CRUMBLES\n AWAY BEHIND YOU,\nLEAVING YOU TRAPPED',
  //   'YOU MUST VENTURE INSIDE\nAND FIND ANOTHER WAY\nTO GET HOME'
  // ]
}

function updateTiles () {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      tile.update(TICK_INTERVAL)
    }
  }
}

start()
