class Heart extends Item {
  constructor (x, y) {
    super(x, y)
    this.sx = 32
  }

  interact () {
    if (player.health < player.maxHealth) {
      map.destroyItem(this)
      player.health += 1
    }
  }
}

