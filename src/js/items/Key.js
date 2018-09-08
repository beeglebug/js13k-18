class Key extends Item {
  constructor (x, y) {
    super(x, y)
    this.sx = 8
  }
  interact () {
    map.destroyItem(this)
    player.add(this)
  }
}

