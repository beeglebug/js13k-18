function update () {
  player.velocity.x = 0
  player.velocity.y = 0
  if (isDown(KEY_W)) player.velocity.y = -player.speed
  if (isDown(KEY_A)) player.velocity.x = -player.speed
  if (isDown(KEY_S)) player.velocity.y = player.speed
  if (isDown(KEY_D)) player.velocity.x = player.speed
  collide()
  gridAlign()
  checkBoundaries()
}

let nearbyTiles = []
let collidableTiles = []

function collide () {
  broadphase()
  const playerShape = {
    x: player.x + player.velocity.x - player.width / 2,
    y: player.y + player.velocity.y - player.height / 2,
    width: player.width,
    height: player.height
  }
  collidableTiles
    .sort((a, b) => {
      const distanceA = fastDistance(a, playerShape)
      const distanceB = fastDistance(b, playerShape)
      return distanceA - distanceB
    })
    .forEach(tile => {
      // check collision of player and tiles
      const response = { x: 0, y: 0 }
      const collision = collideRectRect(playerShape, tile, response)
      if (collision) {
        playerShape.x += response.x
        playerShape.y += response.y
      }
    })
  player.x = playerShape.x + player.width / 2
  player.y = playerShape.y + player.height / 2
}

function fastDistance (a, b) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return (dx * dx) + (dy * dy)
}

function broadphase () {

  nearbyTiles = []
  collidableTiles = []

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
      if (!row) continue
      const tileId = row[x]
      const tile = { x: x * TILE_SIZE, y: y * TILE_SIZE, width: TILE_SIZE, height: TILE_SIZE }
      nearbyTiles.push(tile)
      if (tileId) collidableTiles.push(tile)
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

function gridAlign () {
  // const tolerance = 0.2
  // let dx = (player.x + player.width / 2) % TILE_SIZE
  // let dy = (player.y + player.height / 2) % TILE_SIZE
  // if (dx > TILE_SIZE / 2) dx = dx - TILE_SIZE
  // if (dy > TILE_SIZE / 2) dy = dy - TILE_SIZE
  // debugText(`${dx} ${dy} ${dx / FPS} ${dy / FPS}`)
  // if (Math.abs(dx) > tolerance) {
  //   player.x += dx / FPS
  // }
  // if (Math.abs(dy) > tolerance) {
  //   player.y += dy / FPS
  // }
}
