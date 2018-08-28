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

function ctx (selector, w, h) {
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

const mapCtx = ctx('#map', MAP_SIZE * TILE_SIZE * SCALE, MAP_SIZE * TILE_SIZE * SCALE)

let showGrid = true

function start () {
  render()
}

function render () {

  mapCtx.fillStyle = '#000000'
  mapCtx.fillRect(0, 0, 600, 600)

  renderMap()
  renderGrid(MAP_SIZE, MAP_SIZE, TILE_SIZE)
  //mapCtx.drawImage(sprites, 0, 512)
}

function renderGrid (w, h, s) {
  if (!showGrid) return
  mapCtx.translate(0.5, 0.5)
  mapCtx.strokeStyle = '#333333'
  for (let y = 0; y <= w; y++) {
    mapCtx.moveTo(0, y * s * SCALE)
    mapCtx.lineTo(w * s * SCALE, y * s * SCALE)
  }
  for (let x = 0; x <= w; x++) {
    mapCtx.moveTo(x * s * SCALE, 0)
    mapCtx.lineTo(x * s * SCALE, w * s * SCALE)
  }
  mapCtx.stroke()
  mapCtx.translate(-0.5, -0.5)
}

function renderMap () {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      mapCtx.drawImage(sprites, tile.sx, tile.sy, TILE_SIZE, TILE_SIZE, x * TILE_SIZE * SCALE, y * TILE_SIZE * SCALE, TILE_SIZE * SCALE, TILE_SIZE * SCALE)
    }
  }
}

