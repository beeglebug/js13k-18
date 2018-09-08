const TILE_SIZE = 8
const GAME_WIDTH = 120
const GAME_HEIGHT = 128

const MAP_HEIGHT = 15
const MAP_WIDTH = 15

const itemMap = {
  spawn: Spawn,
  key: Key,
  door: Door,
  sign: Sign,
  spikes: Spikes,
  heart: Heart,
  chest: Chest,
  lavaBoots: LavaBoots,
}

const STATE_MOVING = 0
const STATE_READING = 1
const STATE_DEAD = 3
const STATE_MENU = 4

const BLACK = '#141020'

const TICK_INTERVAL = 200

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68
const KEY_SPACE = 32

const sprites = new Image()
const tiles = new Image()
const font = new Image()

const player = new Player()
const world = new World()

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
