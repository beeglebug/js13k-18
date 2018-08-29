function getCurrentRoom () {
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

// TODO always have a map and items
function getItemAt (x, y) {
  if (!map || !map.items) return
  return map.items.find(i => i.x === x && i.y === y)
}
