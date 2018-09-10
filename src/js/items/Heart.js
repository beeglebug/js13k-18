class Heart extends Item {

  enter () {
    if (player.health < player.maxHealth) {
      map.destroyItem(this)
      player.health += 1
    }
  }
}

