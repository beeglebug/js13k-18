let textStack = []
let currentText = undefined

const MODE_MOVE = 0
const MODE_TEXT = 1

let mode = MODE_MOVE

function showText (text) {
  if (!Array.isArray(text)) text = [text]
  textStack = [...text]
  nextText()
}

function nextText () {
  currentText = textStack.shift()
  if (currentText) {
    mode = MODE_TEXT
  } else {
    mode = MODE_MOVE
  }
}
