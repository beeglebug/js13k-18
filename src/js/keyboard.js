let pressed = {}

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68
const KEY_ANY = -1

addEventListener('keydown', onKeydown)
addEventListener('keyup', onKeyup)
addEventListener('blur', onBlur)

function onKeydown (e) {
  pressed[e.which] = true
  input()
  render()
}

function onKeyup (e) {
  pressed[e.which] = false
}

function onBlur () {
  pressed = {}
}

const isDown = key => {
  if (key === KEY_ANY) return Object.keys(pressed).length > 0
  return !!pressed[key]
}
