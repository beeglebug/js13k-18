const spaceToNull = char => char === ' ' ? null : char

const tileData = {
  0: {},
  1: { sy: 0, sx: 8, solid: true },
  2: { sy: 0, sx: 16, solid: true },
}

const itemMap = {
  [ITEM_KEY]: () => ({ type: ITEM_KEY, sx: 8, sy: 8, collectable: true, solid: false }),
  [ITEM_DOOR]: () => ({ type: ITEM_DOOR, sx: 16, sy: 8, collectable: false, solid: true }),
  [ITEM_SIGN]: ([text]) => ({ type: ITEM_SIGN, sx: 24, sy: 8, text: text.split('|') }),
}

const rooms = [
  {
    data:
    '1222222222220221' +
    '1000000000000001' +
    '1000000000000001' +
    '1000012221000001' +
    '1000020002000001' +
    '1000000200000001' +
    '1000010001000002' +
    '1000022222000000' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000012222221' +
    '1000000010000002' +
    '1000000010000000' +
    '1000000010000001' +
    '2220222222222222',
    items: [
      'K:9:12',
      'D:3:14',
    ]
  },
  {
    data:
    '                ' +
    '                ' +
    '    12222221    ' +
    '    10000001    ' +
    '    10000001    ' +
    '    22100122    ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '1222222002222221' +
    '1000000000000001' +
    '1000000000000001' +
    '2222222222220222',
  },
  {
    data:
    '           12221' +
    '           10002' +
    '           10000' +
    '           10001' +
    '           22222' +
    '                ' +
    '222221          ' +
    '000001          ' +
    '210001          ' +
    ' 10001          ' +
    ' 10001          ' +
    '220001          ' +
    '000001          ' +
    '222222          ' +
    '                ',
  },
  {
    data:
    '1220222222222221' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '2222222222222222',
    items: [
      'S:12:0:You win'
    ]
  },
  { // TEMPLATE
    data:
    '1222222222222221' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '2222222222222222',
    items: []
  },
].map(parseMap)


const world = [
  '1 ',
  '02',
  '3 ',
].map(parseWorld)

function parseWorld (str) {
  return str.split('').map(spaceToNull)
}


function parseItem (str) {
  const [id, x, y, ...rest] = str.split(':')
  return {
    ...itemMap[id](rest),
    x: +x,
    y: +y
  }
}

function parseMap (map) {
  const tiles = map.data.split('').map(spaceToNull)

  map.data = []

  for (let y = 0; y < 15; y++) {
    const row = []
    for (let x = 0; x < 16; x++) {
      const ix = y * 16 + x
      let type = tiles[ix]
      let tile = null
      if (type !== null) {
        tile = { type, x, y, sx: 0, sy: 0, collide: false, ...(tileData[type] || {}) }
      }
      row.push(tile)
    }
    map.data.push(row)
  }

  map.items = map.items ? map.items.map(parseItem) : []

  return map
}
