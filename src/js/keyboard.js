let pressed = {}

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68

addEventListener('keydown', onKeydown)
addEventListener('keyup', onKeyup)
addEventListener('blur', onBlur)

function onKeydown (e) {
  pressed[e.which] = true
  move()
  render()
}

function onKeyup (e) {
  pressed[e.which] = false
}

function onBlur () {
  pressed = {}
}

const isDown = key => !!pressed[key]
