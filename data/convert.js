const map = require('./map.json')
const fs = require('fs')

const world = {
  x: 0,
  y: 0,
  rooms: [

  ]
}

const ROOM_SIZE = 15

const gIdMap = [null, '0', '1', '2']

const layer = map.layers[0]

const { width, height, data } = layer

for (let y = 0; y < height / ROOM_SIZE; y++) {
  for (let x = 0; x < width / ROOM_SIZE; x++) {
    let rows = ''
    for (let i = 0; i < ROOM_SIZE; i++) {
      const start = (y * width * ROOM_SIZE) + (x * ROOM_SIZE) + (i * width)
      const row = data.slice(start, start + ROOM_SIZE)
      rows = rows + row.map(gid => gIdMap[gid]).join('')
    }
    const room = { data: rows }
    world.rooms.push(room)
  }
}

const output = 'const world = ' + JSON.stringify(world)

fs.writeFileSync('./data/world.js', output)


