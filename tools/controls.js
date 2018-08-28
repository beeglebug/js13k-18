
const copyBtn = document.querySelector('#copy')
copyBtn.addEventListener('click', e => {
  output.select()
  document.execCommand('copy')
  document.getSelection().empty()
})

const eraseBtn = document.querySelector('#erase')
eraseBtn.addEventListener('click', e => {
  currentTile = null
  update()
})
