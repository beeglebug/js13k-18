class Heart extends Item {
  constructor (x, y) {
    super(x, y)
    this.type = ITEM_HEART
    this.collectable = true
    this.sx = 32
  }

  collect () {
    if (player.health < player.maxHealth) {
      map.destroyItem(this)
      player.health += 1
    }
  }
}

