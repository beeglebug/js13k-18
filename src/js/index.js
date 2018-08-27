const canvas = document.querySelector('canvas')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT
const ctx = canvas.getContext('2d')

const player = {
  x: 12,
  y: 7,
  wx: 0,
  wy: 1,
  inventory: [],
  health: 3
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



/*

TODO

- maybe dont try to do clever line length regex, just use \n in the strings?
- end of message character on text rendering?


*/
