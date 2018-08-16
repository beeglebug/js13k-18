const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const WIDTH = 256
const HEIGHT = 128
const SIZE = 8

canvas.width = WIDTH
canvas.height = HEIGHT

let sprites = new Image()
sprites.onload = start
sprites.src = './sprites.png'

const player = {
  x: 90,
  y: 50
}

let worldPos = {
  x: 0,
  y: 1
}

function update () {
  if (isDown(KEY_W)) player.y -= 1
  if (isDown(KEY_A)) player.x -= 1
  if (isDown(KEY_S)) player.y += 1
  if (isDown(KEY_D)) player.x += 1
  checkBoundaries()
}

function render () {
  clear()
  drawMap()
  drawPlayer()
}

function checkBoundaries () {
  if (player.y < 0) {
    worldPos.y -= 1
    player.y = HEIGHT
  } else if (player.y > HEIGHT) {
    worldPos.y += 1
    player.y = 0
  } else if (player.x > WIDTH) {
    worldPos.x += 1
    player.x = 0
  } else if (player.x < 0) {
    worldPos.x -= 1
    player.x = WIDTH
  }
}
