function render () {
  clear()
  drawMap()
  drawPlayer()
  separate()
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
  ctx.drawImage(sprites, 8, 0, TILE_SIZE, TILE_SIZE, player.x - 4, player.y - 4, TILE_SIZE, TILE_SIZE)
}

function getMap () {
  const row = world[worldPos.y]
  if (!row) return
  const room = row[worldPos.x]
  if (!room) return
  return rooms[room]
}
