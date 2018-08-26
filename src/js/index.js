const canvas = document.querySelector('canvas')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT
const ctx = canvas.getContext('2d')

const player = {
  x: 12,
  y: 7,
  wx: 0,
  wy: 1,
  inventory: []
}

let map = getMap()
let sprites, font

Promise.all([loadImg('./sprites.png'), loadImg('./font.png')]).then(start)

function loadImg (src) {
  const img = new Image()
  return new Promise(done => {
    img.onload = () => done(img)
    img.src = src
  })
}

function start ([s, f]) {
  sprites = s
  font = f
  render()
}
