function render () {
  clear()
  if (state === STATE_MENU) return renderMenu()
  ctx.translate(0, 8)
  renderMap()
  renderItems()
  player.render()
// removeIf(production)
  debugRender()
// endRemoveIf(production)
  ctx.translate(0, -8)
  renderUI()
}

function clear () {
  ctx.fillStyle = BLACK
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function renderUI () {
  ctx.fillStyle = '#26243a'
  ctx.fillRect(0, 7, GAME_WIDTH, 1)
  renderHealth()
  renderInventory()
  if (currentText) {
    renderText(currentText)
  }
}

function renderHealth () {
  for (let i = 0; i < player.maxHealth; i++) {
    const sx = i < player.health ? 32 : 40
    renderSprite(sprites, sx, 0, i * 8, 0)
  }
}

function renderInventory () {
  player.inventory.forEach(item => {
    const x = (MAP_WIDTH - 1) * TILE_SIZE
    renderSprite(sprites, item.sprite.sx, item.sprite.sy, x, 0)
  })
}

function renderItems () {
  if (!map) return
  map.items.forEach(item => item.render())
}

function renderMap () {
  if (!map) return
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const tile = map.data[y][x]
      if (!tile) continue
      renderTile(tile)
    }
  }
}


function renderTile ({ x, y, sx, sy }) {
  renderSprite(
    tiles,
    sx,
    sy,
    x * TILE_SIZE,
    y * TILE_SIZE
  )
}

function renderSprite (image, sx, sy, x, y) {
  ctx.drawImage(
    image,
    sx,
    sy,
    TILE_SIZE,
    TILE_SIZE,
    x,
    y,
    TILE_SIZE,
    TILE_SIZE
  )
}

function renderMenu () {
  renderText('press space to start')
}
