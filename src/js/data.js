const spaceToNull = char => char === ' ' ? null : char

const tileData = {
  0: { type: 0, sy: 0, sx: 0 },
  1: { type: 1, sy: 0, sx: 8, solid: true },
  2: { type: 2, sy: 0, sx: 16, solid: true },
}

const itemMap = {
  [ITEM_KEY]: () => ({ type: ITEM_KEY, sx: 8, sy: 8, collectable: true, solid: false }),
  [ITEM_DOOR]: () => ({ type: ITEM_DOOR, sx: 16, sy: 8, collectable: false, solid: true }),
  [ITEM_SIGN]: ([text]) => ({ type: ITEM_SIGN, sx: 24, sy: 8, text: text.split('|') }),
}

const rooms = [
  {
    data:
    '222222202222222' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '      000      ' +
    '               ',
  },
  {
    data:
    '122222202222221' +
    '100000000000001' +
    '100000000000001' +
    '100012202210001' +
    '100020000020002' +
    '100000020000000' +
    '200010000010001' +
    '000022202220001' +
    '100000000000001' +
    '100000000000001' +
    '100000000012221' +
    '100000000010002' +
    '100000000010000' +
    '100000000010001' +
    '222222202222222',
    items: [
      'K|12|12',
      'D|7|0',
    ]
  },
  {
    data:
    '          12221' +
    '          10002' +
    '          10000' +
    '          10001' +
    '222221    22222' +
    '000001         ' +
    '210001         ' +
    ' 10001         ' +
    ' 10001         ' +
    ' 10001         ' +
    ' 10001         ' +
    '220001         ' +
    '000001         ' +
    '222222         ' +
    '               ',
  },
  {
    data:
    '122221   122221' +
    '100001   100001' +
    '100001   100001' +
    '100001222100001' +
    '100002000200001' +
    '100000000000001' +
    '100002000200001' +
    '100000000000001' +
    '100002000200001' +
    '100000000000001' +
    '100002000200001' +
    '100000000000001' +
    '100002000200001' +
    '100000000000001' +
    '222222202222222',
    items: [
      'S|7|3|An ancient carving\nYou can\'t decipher it'
    ]
  },
  {"data":"1222222222222211             11 00000000000 11 00000000000 11 00122022100 11 00100000100 11 00200000200 21 00000000000001 00100000100 11 00100000100 11 00222022200 11 00000000000 11 00000000000 11             1222222222222222"},
].map(parseMap)


const world = [
  ' 3 ',
  '412',
  ' 0 ',
].map(parseWorld)

function parseWorld (str) {
  return str.split('').map(spaceToNull)
}


function parseItem (str) {
  const [id, x, y, ...rest] = str.split('|')
  return {
    ...itemMap[id](rest),
    x: +x,
    y: +y
  }
}

function parseMap (map) {
  const tiles = map.data.split('').map(spaceToNull)

  map.data = []

  for (let y = 0; y < MAP_HEIGHT; y++) {
    const row = []
    for (let x = 0; x < MAP_WIDTH; x++) {
      const ix = y * MAP_WIDTH + x
      let type = tiles[ix]
      let tile = null
      if (type !== null) {
        tile = { x, y, collide: false, ...(tileData[type] || {}) }
      }
      row.push(tile)
    }
    map.data.push(row)
  }

  map.items = map.items ? map.items.map(parseItem) : []

  return map
}
