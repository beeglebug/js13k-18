function getMap () {
  const row = world[worldPos.y]
  if (!row) return
  const room = row[worldPos.x]
  if (!room) return
  return rooms[room]
}

function getTileAt (x, y) {
  if (!map) return
  const row = map.data[y]
  return row && row[x]
}
