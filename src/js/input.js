function input () {

  if (mode === MODE_TEXT) {
    if (isDown(KEY_SPACE)) nextText()
    return
  }

  let x = player.x
  let y = player.y

  if (isDown(KEY_W)) y -= 1
  else if (isDown(KEY_A)) x -= 1
  else if (isDown(KEY_S)) y += 1
  else if (isDown(KEY_D)) x += 1

  const item = getItemAt(x, y)
  if (item) {
    if (item.collectable) pickUpItem(item)
    if (item.type === ITEM_DOOR) {
      const key = getInventoryItem(ITEM_KEY)
      if (key) {
        consumeInventoryItem(key)
        destroyItem(item)
      } else {
        showText('It\'s locked\nYou need a key')
      }
    } else if (item.type === ITEM_SIGN) {
      showText(item.text)
    }
    if (item.solid) return
  }

  const tile = getTileAt(x, y)
  if (tile && tile.solid) return

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
  } else {
    if (!tile) return // empty tiles not at screen edge
  }


  if (mapChanged) map = getCurrentRoom()


  player.x = x
  player.y = y
}

function consumeInventoryItem (item) {
  player.inventory = player.inventory.filter(i => i !== item)
}

function getInventoryItem (type) {
  return player.inventory.find(item => item.type === type)
}

function pickUpItem (item) {
  destroyItem(item)
  player.inventory.push(item)
}

function destroyItem (item) {
  map.items = map.items.filter(i => i !== item)
}
