const GAME_WIDTH = 128
const GAME_HEIGHT = 128
const TILE_SIZE = 8

const canvas = document.querySelector('canvas')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT
const ctx = canvas.getContext('2d')


const player = {
  x: 90,
  y: 50
}

let worldPos = {
  x: 0,
  y: 1
}

let sprites = new Image()
sprites.onload = start
sprites.src = './sprites.png'
