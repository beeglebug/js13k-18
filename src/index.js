const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const WIDTH = 320
const HEIGHT = 240
const SIZE = 8

canvas.width = WIDTH
canvas.height = HEIGHT

ctx.fillStyle = '#000'
ctx.fillRect(0, 0, WIDTH, HEIGHT)

const map = [
  '1111111111111111',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1              1',
  '1111111111111111',
]

let sprites = new Image()
sprites.onload = drawMap
sprites.src = './sprites.png'

function drawMap () {
  for (let y = 0; y < map.length; y++) {
    const row = map[y].split('')
    for (let x = 0; x < row.length; x++) {
      const tile = map[y][x]
      if (tile === ' ') continue
      drawTile(x * SIZE, y * SIZE)
    }
  }
}

function drawTile (x, y) {
  ctx.drawImage(sprites, 0, 0, SIZE, SIZE, x, y, SIZE, SIZE)
}
