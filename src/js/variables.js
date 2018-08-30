let lastMove = 0

let mapEntry = {
  x: 0,
  y: 0
}

let rooms
let world

let worldData = [
  ' 3 ',
  '412',
  ' 0 ',
]

let pressed = {}
let pressedLastTick = {}

let textStack = []
let currentText = undefined
let state = STATE_MENU

let player = {}
let map

let fallCounter = 0
