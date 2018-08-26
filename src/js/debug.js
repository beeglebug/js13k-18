// removeIf(production)

const DEBUG = window.location.search.substr(1) === 'debug'

const debugTextNode = document.createElement('div')
document.body.appendChild(debugTextNode)
debugTextNode.style.position = 'absolute'
debugTextNode.style.top = 0
debugTextNode.style.left = 0
debugTextNode.style.color = '#FFFFFF'

function debugRender () {
  if (!DEBUG) return
  debugTileCollision()
  debugText(`x: ${player.x}
y: ${player.y}`)
  ctx.fillStyle = '#FF0000'
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
  ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
  for (let y = 0; y < map.data.length; y++) {
    const row = map.data[y]
    for (let x = 0; x < row.length; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      if (!tile.solid) continue
      ctx.fillRect(tile.x * TILE_SIZE, tile.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
  }
}

// endRemoveIf(production)
