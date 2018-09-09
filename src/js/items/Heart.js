class Heart extends Item {
  constructor (x, y) {
    super(x, y)
    this.sprite.sx =32
  }

  enter () {
    if (player.health < player.maxHealth) {
      map.destroyItem(this)
      player.health += 1
    }
  }
}

