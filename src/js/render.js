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


function drawTile ({ type, x, y, sx, sy }) {
  ctx.drawImage(
    sprites,
    sx,
    sy,
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
