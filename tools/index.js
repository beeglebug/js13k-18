const SCALE = 4
const MAP_SIZE = 15

const output = document.querySelector('#output')

let currentRoom = 0
let map = rooms[currentRoom]
let mapMouse = {
  x: 0,
  y: 0
}
let painting = false
let currentTile = 0

function encode (src) {
  return {
    data: src.data.map(row => row.map(tile => tile ? tile.type : ' ').join('')).join('')
  }
}

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

const sprites = new Image()
sprites.src = '../src/sprites.png'
sprites.onload = start

let mapCtx
let paletteCtx

let showGrid = true

function start () {
  mapCtx = setupCtx('#map', MAP_SIZE * TILE_SIZE * SCALE, MAP_SIZE * TILE_SIZE * SCALE)
  paletteCtx = setupCtx('#palette', sprites.width * SCALE + 1, TILE_SIZE * SCALE + 1)
  fillSelect()
  bindMouse()
  render()
}

function fillSelect () {
  const select = document.querySelector('#rooms')
  rooms.forEach((room, ix) => {
    const option = document.createElement('option')
    option.innerHTML = room.name
    option.value = ix
    select.append(option)
  })
  select.addEventListener('change', e => {
    currentRoom = e.target.value
    map = rooms[currentRoom]
    update()
  })
}
