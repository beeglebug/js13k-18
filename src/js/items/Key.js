class Key extends Item {

  constructor (x, y) {
    super(x, y)
    this.sprite.sx =8
  }

  enter () {
    map.destroyItem(this)
    player.add(this)
  }
}

