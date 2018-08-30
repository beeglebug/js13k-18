let lastMove = 0
let mapEntry = {
  x: 0,
  y: 0
}

function input () {

  if (state === STATE_FALLING) return
  if (state === STATE_DEAD) {
    if (down(KEY_SPACE)) {
      nextText()
      reset()
    }
    return
  }

  if (state === STATE_READING) {
    if (down(KEY_SPACE)) nextText()
    return
  }

  let moved = false

  let x = player.x
  let y = player.y

  if (down(KEY_W)) {
    moved = true
    y -= 1
  }
  else if (down(KEY_A)) {
    moved = true
    x -= 1
  }
  else if (down(KEY_S)) {
    moved = true
    y += 1
  }
  else if (down(KEY_D)) {
    moved = true
    x += 1
  }

  if (!moved) return

  const now = +new Date
  //if (now - lastMove < TICK_INTERVAL) return

  lastMove = now

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
  if (tile) {
    if (tile.solid) return
    if (tile.type === '0') {
      state = STATE_FALLING
    }
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
  } else {
    if (!tile) return // empty tiles not at screen edge
  }

  if (mapChanged) {
    map = getCurrentRoom()
    mapEntry.x = x
    mapEntry.y = y
  }


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
