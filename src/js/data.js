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
  [ITEM_SPAWN]: () => ({ type: ITEM_SPAWN, collectable: false, solid: false }),
  [ITEM_KEY]: () => ({ type: ITEM_KEY, sx: 8, sy: 8, collectable: true, solid: false }),
  [ITEM_DOOR]: () => ({ type: ITEM_DOOR, sx: 16, sy: 8, collectable: false, solid: true }),
  [ITEM_SIGN]: ([text]) => ({ type: ITEM_SIGN, sx: 24, sy: 8, text: text.split('|') }),
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

  room.items = input.items ? input.items.map(parseItem) : []

  return room
}

function parseItem (str) {
  const [type, x, y, ...rest] = str.split('|')
  return {
    ...itemMap[type](rest),
    x: +x,
    y: +y
  }
}
