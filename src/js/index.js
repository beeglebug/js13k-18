function start () {
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
      if (damagePlayer(1)) return
      player.sx = 0
      state = STATE_MOVING
      player.x = mapEntry.x
      player.y = mapEntry.y
    }
  }
  render()
}

function damagePlayer (amount) {
  player.health -= amount
  if (player.health <= 0) {
    return killPlayer()
  }
}

function killPlayer () {
  showText('You died')
  state = STATE_DEAD
  return true
}

function reset () {
  resetPlayer()
  resetMap()
}

function resetPlayer () {
  player = {
    x: 7,
    y: 7,
    sx: 0,
    wx: 2,
    wy: 4,
    inventory: [],
    health: 3,
    maxHealth: 3
  }
}

start()
