const PROBE_SPACING = 3

function updateProbes () {

  resetProbe(xProbe1)
  resetProbe(xProbe2)
  resetProbe(yProbe1)
  resetProbe(yProbe2)

  if (player.velocity.y) {

    yProbe1.active = true
    yProbe2.active = true

    yProbe1.x = player.x - PROBE_SPACING
    yProbe2.x = player.x + PROBE_SPACING

    if (player.velocity.y < 0) {

      // going up
      yProbe1.y = player.y - 4
      yProbe2.y = player.y - 4

    } else if (player.velocity.y > 0) {

      // going down
      yProbe1.y = player.y + 4
      yProbe2.y = player.y + 4
    }
  }

  if (player.velocity.x) {

    xProbe1.active = true
    xProbe2.active = true

    xProbe1.y = player.y - PROBE_SPACING
    xProbe2.y = player.y + PROBE_SPACING

    if (player.velocity.x < 0) {

      // going left
      xProbe1.x = player.x - 4
      xProbe2.x = player.x - 4

    } else if (player.velocity.x > 0) {

      // going right
      xProbe1.x = player.x + 4
      xProbe2.x = player.x + 4

    }
  }
}

function softCorners () {

  if (xProbe1.colliding === true && xProbe2.colliding === false && player.velocity.y >= 0) {
    player.velocity.y = 1
  } else if (xProbe1.colliding === false && xProbe2.colliding === true && player.velocity.y <= 0) {
    player.velocity.y = -1
  }

  if (yProbe1.colliding === true && yProbe2.colliding === false && player.velocity.x >= 0) {
    player.velocity.x = 1
  } else if (yProbe1.colliding === false && yProbe2.colliding === true && player.velocity.x <= 0) {
    player.velocity.x = -1
  }

  // TODO edge case where both corners fire at once
}

function resetProbe (probe) {
  probe.x = 0
  probe.y = 0
  probe.active = false
  probe.colliding = false
}

function collideProbes () {
  if (collidableTileUnderProbe(xProbe1)) {
    xProbe1.colliding = true
  }
  if (collidableTileUnderProbe(xProbe2)) {
    xProbe2.colliding = true
  }
  if (collidableTileUnderProbe(yProbe1)) {
    yProbe1.colliding = true
  }
  if (collidableTileUnderProbe(yProbe2)) {
    yProbe2.colliding = true
  }
}

function collidableTileUnderProbe (probe) {
  if (!probe.active) return false
  const tile = getTileAt(probe.x, probe.y)
  return (tile && tile.collision)
}
