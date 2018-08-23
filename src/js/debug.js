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
