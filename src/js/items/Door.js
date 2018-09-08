class Door extends Item {
  constructor (x, y) {
    super(x, y)
    this.type = ITEM_DOOR
    this.solid = true
    this.sx = 16
  }
}

