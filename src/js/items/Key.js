class Key extends Item {

  enter () {
    map.destroyItem(this)
    player.add(this)
  }
}

