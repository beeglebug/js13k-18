function render () {
  clear()
  drawMap()
  drawPlayer()
// removeIf(production)
// debugRender()
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
    Math.floor(player.x - player.width / 2),
    Math.floor(player.y - player.height / 2),
    TILE_SIZE,
    TILE_SIZE
  )
}

// removeIf(production)

function renderProbes() {
  if (xProbe1.active) {
    ctx.fillStyle = xProbe1.colliding ? '#FF0000' : '#00FF00'
    drawPoint(xProbe1.x, xProbe1.y)
  }
  if (xProbe2.active) {
    ctx.fillStyle = xProbe2.colliding ? '#FF0000' : '#00FF00'
    drawPoint(xProbe2.x, xProbe2.y)
  }
  if (yProbe1.active) {
    ctx.fillStyle = yProbe1.colliding ? '#FF0000' : '#00FF00'
    drawPoint(yProbe1.x, yProbe1.y)
  }
  if (yProbe2.active) {
    ctx.fillStyle = yProbe2.colliding ? '#FF0000' : '#00FF00'
    drawPoint(yProbe2.x, yProbe2.y)
  }
}

function debugRender () {
  ctx.fillStyle = '#FF0000'
  drawPoint(player.x, player.y)
  renderProbes()
  debugText(`vx: ${player.velocity.x} \n vy: ${player.velocity.y}`)
}

function drawRect (x, y, w, h) {
  ctx.strokeRect(x, y, w, h)
}

function drawPoint (x, y) {
  ctx.fillRect(x, y, 1, 1)
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
