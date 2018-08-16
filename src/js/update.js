function update () {
  if (isDown(KEY_W)) player.y -= 1
  if (isDown(KEY_A)) player.x -= 1
  if (isDown(KEY_S)) player.y += 1
  if (isDown(KEY_D)) player.x += 1
  checkBoundaries()
}

function checkBoundaries () {
  if (player.y < 0) {
    worldPos.y -= 1
    player.y = GAME_HEIGHT
  } else if (player.y > GAME_HEIGHT) {
    worldPos.y += 1
    player.y = 0
  } else if (player.x > GAME_WIDTH) {
    worldPos.x += 1
    player.x = 0
  } else if (player.x < 0) {
    worldPos.x -= 1
    player.x = GAME_WIDTH
  }
}
