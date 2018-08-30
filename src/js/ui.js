let textStack = []
let currentText = undefined
let state = STATE_MENU

function showText (text) {
  if (!Array.isArray(text)) text = [text]
  textStack = [...text]
  nextText()
}

function nextText () {
  currentText = textStack.shift()
  if (currentText) {
    state = STATE_READING
  } else {
    state = STATE_MOVING
  }
}
