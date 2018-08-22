function render () {
  clear()
  drawMap()
  drawPlayer()
// removeIf(production)
//   debugCollision()
// endRemoveIf(production)
}

function clear () {
  ctx.fillStyle = '#152d37'
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

let map

function drawMap () {
  map = getMap()
  if (!map) return
  for (let y = 0; y < map.length; y++) {
    const row = map[y]
    for (let x = 0; x < row.length; x++) {
      const tile = map[y][x]
      if (!tile) continue
      drawTile(x * TILE_SIZE, y * TILE_SIZE)
    }
  }
}

function drawTile (x, y) {
  ctx.drawImage(sprites, 0, 0, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE, TILE_SIZE)
}

function drawPlayer () {
  ctx.drawImage(
    sprites,
    8, 0,
    TILE_SIZE, TILE_SIZE,
    Math.round(player.x - player.width / 2),
    Math.round(player.y - player.height / 2),
    TILE_SIZE,
    TILE_SIZE
  )
}

function getMap () {
  const row = world[worldPos.y]
  if (!row) return
  const room = row[worldPos.x]
  if (!room) return
  return rooms[room]
}

// removeIf(production)
function debugCollision () {
  ctx.translate(0.5, 0.5)

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
  nearbyTiles.forEach(tile => drawRect(tile.x, tile.y, tile.width, tile.height))

  ctx.strokeStyle = '#FF0000'
  collidableTiles.forEach(tile => drawRect(tile.x, tile.y, tile.width, tile.height))

  ctx.strokeStyle = '#00FF00'
  drawRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height)

  ctx.translate(-0.5, -0.5)
}

function drawRect (x, y, w, h) {
  ctx.strokeRect(x, y, w, h)
}

function drawCircle (x, y, radius) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.stroke()
}

function debugText (text) {
  debugTextNode.innerText = text
}

// endRemoveIf(production)
