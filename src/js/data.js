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
    '222222221       ' +
    '000000001       ' +
    '221000001       ' +
    '  1000001       ' +
    '  1000001       ' +
    '  1000001       ' +
    '222000001       ' +
    '000000001       ' +
    '222222222       ',
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
