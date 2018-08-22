const canvas = document.querySelector('canvas')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT
const ctx = canvas.getContext('2d')

// removeIf(production)
const debugTextNode = document.createElement('div')
document.body.appendChild(debugTextNode)
debugTextNode.style.position = 'absolute'
debugTextNode.style.top = 0
debugTextNode.style.left = 0
debugTextNode.style.color = '#FFFFFF'
// endRemoveIf(production)

const player = {
  x: 100,
  y: 50,
  width: TILE_SIZE,
  height: TILE_SIZE,
  speed: 1,
  velocity: {
    x: 0,
    y: 0
  }
}

// collision probes
const xProbe1 = { x: 0, y: 0, active: false }
const xProbe2 = { x: 0, y: 0, active: false }
const yProbe1 = { x: 0, y: 0, active: false }
const yProbe2 = { x: 0, y: 0, active: false }


let worldPos = {
  x: 0,
  y: 1
}

let sprites = new Image()
sprites.onload = start
sprites.src = './sprites.png'
