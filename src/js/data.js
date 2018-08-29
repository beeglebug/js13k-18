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
  [ITEM_KEY]: () => ({ type: ITEM_KEY, sx: 8, sy: 8, collectable: true, solid: false }),
  [ITEM_DOOR]: () => ({ type: ITEM_DOOR, sx: 16, sy: 8, collectable: false, solid: true }),
  [ITEM_SIGN]: ([text]) => ({ type: ITEM_SIGN, sx: 24, sy: 8, text: text.split('|') }),
}

let world = [
  ' 3 ',
  '412',
  ' 0 ',
]

rooms = rooms.map(parseRoom)
world = world.map(parseWorld)

function parseWorld (str) {
  return str.split('').map(spaceToNull)
}

function parseRoom (room) {
  const tiles = room.data.split('').map(spaceToNull)

  room.data = []

  for (let y = 0; y < MAP_HEIGHT; y++) {
    const row = []
    for (let x = 0; x < MAP_WIDTH; x++) {
      const ix = y * MAP_WIDTH + x
      let type = tiles[ix]
      let tile = null
      if (type !== 0) {
        tile = {
          x, y,
          solid: true,
          ...getTileData(type)
        }
      }
      row.push(tile)
    }
    room.data.push(row)
  }

  room.items = room.items ? room.items.map(parseItem) : []

  return room
}

function parseItem (str) {
  const [id, x, y, ...rest] = str.split('|')
  return {
    ...itemMap[id](rest),
    x: +x,
    y: +y
  }
}
