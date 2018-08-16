function update () {
  if (isDown(KEY_W)) player.y -= 1
  if (isDown(KEY_A)) player.x -= 1
  if (isDown(KEY_S)) player.y += 1
  if (isDown(KEY_D)) player.x += 1
  separate()
  checkBoundaries()
}

function separate () {
  if (!map) return

  const tileX = Math.floor(player.x / TILE_SIZE)
  const tileY = Math.floor(player.y / TILE_SIZE)

  const minX = Math.max(tileX, 1) - 1
  const minY = Math.max(tileY, 1) - 1

  const maxX = Math.min(tileX, GAME_WIDTH * TILE_SIZE) + 1
  const maxY = Math.min(tileY, GAME_HEIGHT * TILE_SIZE) + 1

  for (let y = minY; y <= maxY; y++) {
    const row = map[y]
    for (let x = minX; x <= maxX; x++) {
      const tile = map[y][x]
      if (!tile) {
        ctx.strokeStyle = '#52050f'
      } else {
        ctx.strokeStyle = 'red'
      }
      ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
  }
}

function checkBoundaries () {
  if (player.y < 0) {
    worldPos.y -= 1
    player.y = GAME_HEIGHT
  } else if (player.y > GAME_HEIGHT) {
    worldPos.y += 1
    player.y = 0
  } else if (player.x > GAME_WIDTH) {
    worldPos.x += 1
    player.x = 0
  } else if (player.x < 0) {
    worldPos.x -= 1
    player.x = GAME_WIDTH
  }
}
