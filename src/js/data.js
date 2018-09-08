const spaceToNull = char => char === ' ' ? null : char

function getTileData (type) {
  return {
    type,
    sy: 0,
    sx: (type - 1) * TILE_SIZE,
    ...(tileData[type] || {})
  }
}

const tileData = {
  0: { solid: false },
  1: { solid: false }
}

const itemMap = {
  [ITEM_SPAWN]: Spawn,
  [ITEM_KEY]: Key,
  [ITEM_DOOR]: Door,
  [ITEM_SIGN]: Sign
}

function resetMap () {
  for (let y = 0; y < roomData.length; y++) {
    for (let x = 0; x < roomData[y].length; x++) {
      if(!rooms[y]) rooms[y] = []
      rooms[y][x] = parseRoom(roomData, x, y)
    }
  }
}


function parseRoom (data, x, y) {

  const input = data[y][x]
  const tiles = input.data.map(spaceToNull)
  const room = { x, y, data: [] }

  for (let y = 0; y < MAP_HEIGHT; y++) {
    const row = []
    for (let x = 0; x < MAP_WIDTH; x++) {
      const ix = y * MAP_WIDTH + x
      let type = tiles[ix]
      const tile = {
        x, y,
        solid: true,
        ...getTileData(type)
      }
      row.push(tile)
    }
    room.data.push(row)
  }

  room.items = input.items ? input.items.map(parseItem).filter(i => i) : []

  return room
}

function parseItem (str) {
  const [type, ...rest] = str.split('|')
  if (!itemMap[type]) return console.warn('unknown item type', type)
  return new itemMap[type](...rest)
}
