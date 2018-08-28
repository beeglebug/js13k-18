let mapMouse = {
  x: 0,
  y: 0
}

let painting = false

const currentTile = 1

const mapPos = document.querySelector('#mapPos')

mapCtx.canvas.addEventListener('mousemove', e => {
  const x = Math.floor(e.offsetX / (TILE_SIZE * SCALE))
  const y = Math.floor(e.offsetY / (TILE_SIZE * SCALE))

  if (painting && (x !== mapMouse.x || y !== mapMouse.y)) {
    paintTile(x, y)
  }

  mapMouse = { x, y }
  mapPos.innerHTML = `x:${x} y:${y}`
})

mapCtx.canvas.addEventListener('mousedown', e => {
  painting = true
  paintTile(mapMouse.x, mapMouse.y)
})


mapCtx.canvas.addEventListener('mouseup', e => {
  painting = false
})

function paintTile (x, y) {
  const type = currentTile
  const tile = { type, x, y, sx: 0, sy: 0, ...(tileData[type] || {}) }
  map.data[y][x] = tile
  update()
}

function update () {
  render()
  updateOutput()
}
