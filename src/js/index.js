const canvas = document.querySelector('canvas')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT
const ctx = canvas.getContext('2d')

let player = {}

let map
let sprites, font

const TICK_INTERVAL = 200

Promise.all([loadImg('./sprites.png'), loadImg('./font.png')]).then(start)

function loadImg (src) {
  const img = new Image()
  return new Promise(done => {
    img.onload = () => done(img)
    img.src = src
  })
}

function start ([s, f]) {
  sprites = s
  font = f
  reset()
  render()
  setInterval(tick, TICK_INTERVAL)
}

let fallCounter = 0

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
    wx: 1,
    wy: 1,
    inventory: [],
    health: 3,
    maxHealth: 3
  }
}
