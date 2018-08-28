const SCALE = 4
const MAP_SIZE = 15

const output = document.querySelector('#output')

let map = rooms[0]

function encode (src) {
  return {
    data: src.data.map(row => row.map(tile => tile ? tile.type : ' ').join('')).join('')
  }
}

const copyBtn = document.querySelector('#copy')
copyBtn.addEventListener('click', e => {
  output.select()
  document.execCommand('copy')
  document.getSelection().empty()
})


function updateOutput () {
  output.value = JSON.stringify(encode(map))
}

updateOutput()

function setupCtx (selector, w, h) {
  const canvas = document.querySelector(selector)
  canvas.width = w
  canvas.height = h
  const context = canvas.getContext('2d')
  context.imageSmoothingEnabled = false
  return context
}

const gridCbx = document.querySelector('[name=grid]')
gridCbx.addEventListener('change', e => {
  showGrid = e.target.checked
})

const sprites = new Image()
sprites.src = '../src/sprites.png'
sprites.onload = start

let mapCtx
let paletteCtx

let showGrid = true

function start () {
  mapCtx = setupCtx('#map', MAP_SIZE * TILE_SIZE * SCALE, MAP_SIZE * TILE_SIZE * SCALE)
  paletteCtx = setupCtx('#palette', sprites.width * SCALE + 1, sprites.height * SCALE + 1)
  bindMouse()
  render()
}

function render () {

  mapCtx.fillStyle = '#000000'
  mapCtx.fillRect(0, 0, 600, 600)

  renderMap()
  renderPalette()
}

function renderGrid (ctx, color, w, h, s) {
  if (!showGrid) return
  ctx.translate(0.5, 0.5)
  ctx.strokeStyle = color
  for (let y = 0; y <= h; y++) {
    ctx.moveTo(0, y * s)
    ctx.lineTo(w * s, y * s)
  }
  for (let x = 0; x <= w; x++) {
    ctx.moveTo(x * s, 0)
    ctx.lineTo(x * s, h * s)
  }
  ctx.stroke()
  ctx.translate(-0.5, -0.5)
}

function renderMap () {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      mapCtx.drawImage(sprites, tile.sx, tile.sy, TILE_SIZE, TILE_SIZE, x * TILE_SIZE * SCALE, y * TILE_SIZE * SCALE, TILE_SIZE * SCALE, TILE_SIZE * SCALE)
    }
  }
  renderGrid(mapCtx, '#333333', MAP_SIZE, MAP_SIZE, TILE_SIZE * SCALE)
}

function renderPalette () {
  const w = sprites.width * SCALE
  const h = TILE_SIZE * SCALE
  paletteCtx.drawImage(sprites, 0, 0, sprites.width, TILE_SIZE, 0, 0, w, h)
  renderGrid(paletteCtx, '#444444', w, 1, TILE_SIZE * SCALE)
  renderSelected()
}

function renderSelected () {
  const tile = tileData[currentTile]
  paletteCtx.translate(0.5, 0.5)
  paletteCtx.strokeStyle = '#FFFFFF'
  paletteCtx.strokeRect(tile.sx * SCALE, tile.sy * SCALE, TILE_SIZE * SCALE, TILE_SIZE * SCALE)
  paletteCtx.translate(-0.5, -0.5)
}
