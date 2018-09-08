class Sign extends Item {

  constructor (x, y, [text]) {
    super(x, y)
    this.sprite.sx =24
    this.text = text.split('|')
  }

  interact () {
    showText(this.text)
  }
}
