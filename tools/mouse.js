let mapMouse = {
  x: 0,
  y: 0
}

let painting = false

let currentTile = "1"

const mapPos = document.querySelector('#mapPos')

function bindMouse () {

  mapCtx.canvas.addEventListener('mousemove', e => {
    const x = Math.floor(e.offsetX / (TILE_SIZE * SCALE))
    const y = Math.floor(e.offsetY / (TILE_SIZE * SCALE))

    if (painting && (x !== mapMouse.x || y !== mapMouse.y)) {
      paintTile(x, y)
    }

    mapMouse = {x, y}
    mapPos.innerHTML = `x:${x} y:${y}`
  })

  mapCtx.canvas.addEventListener('mousedown', e => {
    painting = true
    paintTile(mapMouse.x, mapMouse.y)
  })

  mapCtx.canvas.addEventListener('mouseup', e => {
    painting = false
  })

  paletteCtx.canvas.addEventListener('mousedown', e => {
    const x = Math.floor(e.offsetX / (TILE_SIZE * SCALE)) * TILE_SIZE
    const tile = Object.entries(tileData).find(([key, data]) => data.sx === x)
    if (tile) {
      currentTile = tile[1].type
      update()
    }
  })
}

function paintTile (x, y) {
  const type = currentTile
  map.data[y][x] = { type, x, y, sx: 0, sy: 0, ...(tileData[type] || {}) }
  update()
}

function update () {
  render()
  updateOutput()
}
