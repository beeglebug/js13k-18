function render () {
  clear()
  drawMap()
  drawPlayer()
  debugCollision()
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

function debugCollision () {
  ctx.translate(0.5, 0.5)

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
  near.forEach(({ x, y }) => drawRect(x, y))

  ctx.strokeStyle = '#FF0000'
  collidable.forEach(({ x, y }) => drawRect(x, y))

  ctx.translate(-0.5, -0.5)
}

function drawRect (x, y) {
  ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
}
