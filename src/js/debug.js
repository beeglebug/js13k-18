// removeIf(production)

const DEBUG = window.location.search.substr(1) === 'debug'

const debugTextNode = document.createElement('div')
document.body.appendChild(debugTextNode)
debugTextNode.style.position = 'absolute'
debugTextNode.style.top = 0
debugTextNode.style.left = 0
debugTextNode.style.color = '#FFFFFF'

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
  if (!DEBUG) return
  ctx.fillStyle = '#FF0000'
  drawPoint(player.x, player.y)
  renderProbes()
  debugTileCollision()
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

function debugTileCollision () {
  map = getMap()
  if (!map) return
  ctx.translate(0.5, 0.5)
  ctx.strokeStyle = '#FF0000'
  for (let y = 0; y < map.data.length; y++) {
    const row = map.data[y]
    for (let x = 0; x < row.length; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      if (!tile.solid) continue
      drawRect(tile.x * TILE_SIZE, tile.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
  }
  ctx.translate(-0.5, -0.5)
}

// endRemoveIf(production)
