const spaceToNull = char => char === ' ' ? null : char

const collisionMap = {
  0: false,
  1: true
}

const itemMap = {
  K: { sx: 8, sy: 8 }
}

const rooms = [
  {
    data:
    '1111111111110111' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000011111000001' +
    '1000010001000001' +
    '1000000100000001' +
    '1000010001000000' +
    '1000011111000001' +
    '1000000000000001' +
    '1000000000000001' +
    '1000000011111111' +
    '1000000010000001' +
    '1000000010000001' +
    '1000000010000000' +
    '1111111111111111',
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

  if (!map.width) map.width = 16
  if (!map.height) map.height = 16

  const tiles = map.data.split('').map(spaceToNull)

  map.data = []

  for (let y = 0; y < map.height; y++) {
    const row = []
    for (let x = 0; x < map.width; x++) {
      const ix = y * map.width + x
      let type = tiles[ix]
      let tile = null
      if (type !== null) {
        tile = { type, x, y, collision: collisionMap[type] }
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
