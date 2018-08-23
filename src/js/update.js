function update () {
  player.velocity.x = 0
  player.velocity.y = 0
  if (isDown(KEY_W)) player.velocity.y = -player.speed
  if (isDown(KEY_A)) player.velocity.x = -player.speed
  if (isDown(KEY_S)) player.velocity.y = player.speed
  if (isDown(KEY_D)) player.velocity.x = player.speed
  // setMagnitude(player.velocity, 1)
  collide()
  checkBoundaries()
}

function collide () {

  updateProbes()
  collideProbes()
  softCorners()

  if (!xProbe1.colliding && !xProbe2.colliding) {
    player.x += player.velocity.x
  }

  if (!yProbe1.colliding && !yProbe2.colliding) {
    player.y += player.velocity.y
  }

}

function checkBoundaries () {
  let change = false
  if (player.y < 0) {
    worldPos.y -= 1
    player.y = GAME_HEIGHT
    change = true
  } else if (player.y > GAME_HEIGHT) {
    worldPos.y += 1
    player.y = 0
    change = true
  } else if (player.x > GAME_WIDTH) {
    worldPos.x += 1
    player.x = 0
    change = true
  } else if (player.x < 0) {
    worldPos.x -= 1
    player.x = GAME_WIDTH
    change = true
  }
  if (change) map = getMap()
}

function magnitude (v) {
  return Math.sqrt((v.x * v.x) + (v.y * v.y))
}

function setMagnitude (v, len) {
  normalise(v)
  multiply(v, len)
}

function normalise (v) {
  if (v.x === 0 && v.y === 0) return
  const m = magnitude(v)
  v.x /= m
  v.y /= m
}

function multiply (v, s) {
  v.x *= s
  v.y *= s
}
