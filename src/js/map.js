function getMap () {
  const row = world[player.wy]
  if (!row) return
  const room = row[player.wx]
  if (!room) return
  return rooms[room]
}

function getTileAt (x, y) {
  if (!map) return
  const row = map.data[y]
  return row && row[x]
}
