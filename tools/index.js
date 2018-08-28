const canvas = document.querySelector('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')

const gridCbx = document.querySelector('[name=grid]')
gridCbx.addEventListener('change', e => {
  showGrid = e.target.checked
})

const sprites = new Image()
sprites.src = '../src/sprites.png'
sprites.onload = loop

const map = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

function loop () {
  requestAnimationFrame(loop)
  render()
}

let showGrid = true

const SCALE = 4
const TILE_SIZE = 8
const MAP_SIZE = 15

function render () {

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, 600, 600)

  renderGrid()
  ctx.drawImage(sprites, 0, 512)
}

function renderGrid () {
  if (!showGrid) return
  ctx.translate(0.5, 0.5)
  ctx.strokeStyle = '#333333'
  for (let y = 0; y <= MAP_SIZE; y++) {
    ctx.moveTo(0, y * TILE_SIZE * SCALE)
    ctx.lineTo(MAP_SIZE * TILE_SIZE * SCALE, y * TILE_SIZE * SCALE)
  }
  for (let x = 0; x <= MAP_SIZE; x++) {
    ctx.moveTo(x * TILE_SIZE * SCALE, 0)
    ctx.lineTo(x * TILE_SIZE * SCALE, MAP_SIZE * TILE_SIZE * SCALE)
  }
  ctx.stroke()
  ctx.translate(-0.5, -0.5)
}



