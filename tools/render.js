function render () {
  mapCtx.fillStyle = '#000000'
  mapCtx.fillRect(0, 0, 600, 600)
  renderMap()
  renderPalette()
}

function renderGrid (ctx, color, w, h, s) {
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
  if (showGrid) {
    renderGrid(mapCtx, '#333333', MAP_SIZE, MAP_SIZE, TILE_SIZE * SCALE)
  }
}

function renderPalette () {
  const w = sprites.width * SCALE
  const h = TILE_SIZE * SCALE
  paletteCtx.drawImage(sprites, 0, 0, sprites.width, TILE_SIZE, 0, 0, w, h)
  renderGrid(paletteCtx, '#444444', w, 1, TILE_SIZE * SCALE)
  renderSelected()
}

function renderSelected () {
  if (!currentTile) return
  const tile = tileData[currentTile]
  paletteCtx.translate(0.5, 0.5)
  paletteCtx.strokeStyle = '#FFFFFF'
  paletteCtx.strokeRect(tile.sx * SCALE, tile.sy * SCALE, TILE_SIZE * SCALE, TILE_SIZE * SCALE)
  paletteCtx.translate(-0.5, -0.5)
}
