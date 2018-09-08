function input () {

  if (state === STATE_DEAD) {
    if (down(KEY_SPACE)) {
      nextText()
      state = STATE_MENU
      reset()
    }
    return
  }

  if (state === STATE_READING || state === STATE_MENU) {
    if (down(KEY_SPACE)) nextText()
    return
  }

  if (player.locked) return

  if (state !== STATE_MOVING) return

  let x = player.x
  let y = player.y

  let moved = false

  if (down(KEY_W)) {
    y -= 1
    moved = true
  } else if (down(KEY_A)) {
    x -= 1
    moved = true
  } else if (down(KEY_S)) {
    y += 1
    moved = true
  } else if (down(KEY_D)) {
    x += 1
    moved = true
  }

  if (!moved) return

  const tile = map.getTileAt(x, y)
  const item = map.getItemAt(x, y)

  if (item) {
    item.interact()
    if (item.solid) return
  }

  if (tile) {
    if (tile.solid) return
    if (tile.damage) {
      player.damage(() => {
        player.goBack()
      }, 200)
    }
    if (tile.type === 0) player.fall()
  }

  player.goTo(x, y)
}

function checkItems () {

  const { x, y } = player

  const item = map.getItemAt(x, y)

  if (item) {
    item.interact()
  }
}

function checkMapChange () {

  let mapChanged = false

  let { x, y } = player

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

  if (mapChanged) {
    map = world.getCurrentRoom()
    map.setEntrance(x, y)
    player.goTo(x, y)
  }

}
