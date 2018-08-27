function render () {
  clear()
  ctx.translate(0, 8)
  drawMap()
  drawItems()
  drawPlayer()
  // drawText('Testing this font rendering solution when there are lots of characters and stuff, it should handle a lot of text')
// removeIf(production)
  debugRender()
// endRemoveIf(production)
  ctx.translate(0, -8)
  drawUI()
}

function clear () {
  ctx.fillStyle = '#0f1517'
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function drawUI () {
  drawInventory()
  if (currentText) {
    drawText(currentText)
  }
}

function drawInventory () {
  player.inventory.forEach(item => {
    const x = 15 * TILE_SIZE
    drawSprite(item.sx, item.sy, x, 0)
  })
}

function drawItems () {
  if (!map) return
  map.items.forEach(item => {
    drawSprite(item.sx, item.sy, item.x * TILE_SIZE, item.y * TILE_SIZE)
  })
}

function drawMap () {
  if (!map) return
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      drawTile(tile)
    }
  }
}


function drawTile ({ x, y, sx, sy }) {
  drawSprite(
    sx,
    sy,
    x * TILE_SIZE,
    y * TILE_SIZE
  )
}

function drawPlayer () {
  drawSprite(
    0, 8,
    player.x * TILE_SIZE,
    player.y * TILE_SIZE
  )
}

function drawSprite (sx, sy, x, y) {
  ctx.drawImage(
    sprites,
    sx,
    sy,
    TILE_SIZE,
    TILE_SIZE,
    x,
    y,
    TILE_SIZE,
    TILE_SIZE
  )
}
