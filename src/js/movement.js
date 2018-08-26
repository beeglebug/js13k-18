function move () {
  let x = player.x
  let y = player.y

  if (isDown(KEY_W)) y -= 1
  if (isDown(KEY_A)) x -= 1
  if (isDown(KEY_S)) y += 1
  if (isDown(KEY_D)) x += 1

  const tile = getTileAt(x, y)
  if (tile && tile.solid) return

  const item = getItemAt(x, y)
  if (item) {
    if (item.collectable) pickUpItem(item)
    if (item.type === ITEM_DOOR && hasInventoryItem(ITEM_KEY)) {
      consumeInventoryItem(ITEM_KEY)
      destroyItem(item)
    }
    if (item.solid) return
  }

  let mapChanged = false

  if (y < 0) {
    player.wy -= 1
    y = MAP_HEIGHT - 1
    mapChanged = true
  } else if (y >= MAP_HEIGHT) {
    player.wy += 1
    y = 0
    mapChanged = true
  } else if (x >= MAP_WIDTH) {
    player.wx += 1
    x = 0
    mapChanged = true
  } else if (x < 0) {
    player.wx -= 1
    x = MAP_WIDTH - 1
    mapChanged = true
  }

  if (mapChanged) map = getMap()

  player.x = x
  player.y = y
}

function consumeInventoryItem (item) {
  player.inventory = player.inventory.filter(i => i !== item)
}

function hasInventoryItem (type) {
  return player.inventory.some(item => item.type === type)
}

function pickUpItem (item) {
  destroyItem(item)
  player.inventory.push(item)
}

function destroyItem (item) {
  map.items = map.items.filter(i => i !== item)
}