function getMap () {
  const row = world[worldPos.y]
  if (!row) return
  const room = row[worldPos.x]
  if (!room) return
  return rooms[room]
}

function getTileAt (x, y) {
  const wx = Math.floor(x / TILE_SIZE)
  const wy = Math.floor(y / TILE_SIZE)
  const row = map.data[wy]
  return row && row[wx]
}
