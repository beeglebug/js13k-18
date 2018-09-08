class Key extends Item {
  constructor (x, y) {
    super(x, y)
    this.type = ITEM_KEY
    this.collectable = true
    this.sx = 8
  }
}

