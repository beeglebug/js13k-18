function render () {
  clear()
  ctx.translate(0, 8)
  drawMap()
  drawItems()
  drawPlayer()
// removeIf(production)
  debugRender()
// endRemoveIf(production)
  ctx.translate(0, -8)
  drawUI()
}

function clear () {
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function drawUI () {
  ctx.fillStyle = '#20213E'
  ctx.fillRect(0, 7, GAME_WIDTH, 1)
  drawHealth()
  drawInventory()
  if (currentText) {
    drawText(currentText)
  }
}

function drawHealth () {
  for (let i = 0; i < player.maxHealth; i++) {
    const sx = i < player.health ? 32 : 40
    drawSprite(sx, 8, i * 8, 0)
  }
}

function drawInventory () {
  player.inventory.forEach(item => {
    const x = (MAP_WIDTH - 1) * TILE_SIZE
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
