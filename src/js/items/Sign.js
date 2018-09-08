class Sign extends Item {
  constructor (x, y, [text]) {
    super(x, y)
    this.type = ITEM_SIGN
    this.sx = 24
    this.text = text.split('|')
  }
}
