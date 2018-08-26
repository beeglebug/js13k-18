const spaceToNull = char => char === ' ' ? null : char

const tileData = {
  0: {},
  1: { sx: 8, solid: true },
  2: { sx: 16, solid: true },
}

const itemMap = {
  K: { sx: 8, sy: 8 }
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
    '1000000010000001' +
    '1000000010000002' +
    '1000000010000000' +
    '2222222222222222',
    items: [
      'K:9:12'
    ]
  },
  {
    data:
    '                ' +
    '                ' +
    '    11111111    ' +
    '    10000001    ' +
    '    10000001    ' +
    '    11100111    ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '      1001      ' +
    '1111111001111111' +
    '1000000000000001' +
    '1000000000000001' +
    '1111111111110111',
  },
  {
    data:
    '           11111' +
    '           10001' +
    '           10000' +
    '           10001' +
    '           11111' +
    '                ' +
    '111111111       ' +
    '000000001       ' +
    '111000001       ' +
    '  1000001       ' +
    '  1000001       ' +
    '  1000001       ' +
    '111000001       ' +
    '000000001       ' +
    '111111111       ',
  }

].map(parseMap)

function parseItem (str) {
  const [id, x, y] = str.split(':')
  return {
    ...itemMap[id],
    x,
    y
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


const world = [
  '1 ',
  '02'
].map(str => str.split('').map(spaceToNull))
