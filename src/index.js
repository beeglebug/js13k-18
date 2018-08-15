const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const WIDTH = 384
const HEIGHT = 216
const SIZE = 8

canvas.width = WIDTH
canvas.height = HEIGHT

const map = [
  '11111111111111111111111111111111',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '1                              1',
  '11111111111111111111111111111111',
]

let sprites = new Image()
sprites.onload = start
sprites.src = './sprites.png'

let playerX = 64
let playerY = 32

function update () {
  if (isDown(KEY_W)) playerY -= 1
  if (isDown(KEY_A)) playerX -= 1
  if (isDown(KEY_S)) playerY += 1
  if (isDown(KEY_D)) playerX += 1
}

function render () {
  clear()
  drawMap()
  drawPlayer()
}
