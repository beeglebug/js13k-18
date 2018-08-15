function clear () {
  ctx.fillStyle = '#1C1C1C'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

function drawMap () {
  for (let y = 0; y < map.length; y++) {
    const row = map[y].split('')
    for (let x = 0; x < row.length; x++) {
      const tile = map[y][x]
      if (tile === ' ') continue
      drawTile(x * SIZE, y * SIZE)
    }
  }
}

function drawTile (x, y) {
  ctx.drawImage(sprites, 0, 0, SIZE, SIZE, x, y, SIZE, SIZE)
}

function drawPlayer () {
  ctx.drawImage(sprites, 8, 0, SIZE, SIZE, playerX, playerY, SIZE, SIZE)
}
