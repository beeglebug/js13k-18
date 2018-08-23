function render () {
  clear()
  drawMap()
  drawItems()
  drawPlayer()
// removeIf(production)
  debugRender()
// endRemoveIf(production)
}

function clear () {
  ctx.fillStyle = '#0f1517'
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function drawItems () {
  if (!map) return
  map.items.forEach(item => {
    drawSprite(item.sx, item.sy, item.x * TILE_SIZE, item.y * TILE_SIZE)
  })
}

function drawMap () {
  if (!map) return
  for (let y = 0; y < map.data.length; y++) {
    const row = map.data[y]
    for (let x = 0; x < row.length; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      drawTile(tile)
    }
  }
}

// TODO shrink this to [0,1] and unpack
const tileSet = {
  0: { x: 0, y: 0 },
  1: { x: 8, y: 0 },
}

function drawTile ({ type, x, y }) {
  const source = tileSet[type]
  ctx.drawImage(
    sprites,
    source.x,
    source.y,
    TILE_SIZE,
    TILE_SIZE,
    x * TILE_SIZE,
    y * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
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

function drawPlayer () {
  drawSprite(
    0, 8,
    Math.floor(player.x - player.width / 2),
    Math.floor(player.y - player.height / 2)
  )
}
