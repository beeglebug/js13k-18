const fs = require('fs')
const glob = require('glob')

const rooms = []

glob('data/*.json', (_, files) => {
  files.forEach(file => {
    const json = fs.readFileSync(file)
    parseMap(JSON.parse(json))
  })
  writeOutput()
})

function parseMap (map) {
  const room = {}
  map.layers.forEach(layer => {
    if (layer.type === 'tilelayer') {
      room.data = layer.data.join('')
    }
  })
  rooms.push(room)
}

function writeOutput () {
  const output = 'let rooms = ' + JSON.stringify(rooms)
  fs.writeFileSync('./src/js/rooms.js', output)
}

