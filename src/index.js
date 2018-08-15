const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const WIDTH = 320
const HEIGHT = 240

canvas.width = WIDTH
canvas.height = HEIGHT

ctx.fillStyle = '#000'
ctx.fillRect(0,0, WIDTH, HEIGHT)

let sprites = new Image()
sprites.onload = () => {
  drawTile(0, 0)
  drawTile(0, 8)
  drawTile(0, 16)
  drawTile(0, 24)
  drawTile(0, 32)
}
sprites.src = './sprites.png'


function drawTile (x, y) {
  ctx.drawImage(sprites, 0, 0, 8, 8, x, y, 8, 8)
}
