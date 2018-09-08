class Door extends Item {
  constructor (x, y) {
    super(x, y)
    this.solid = true
    this.sx = 16
  }

  interact () {
    const key = player.getItemOfType(Key)
    if (!key) return showText('It\'s locked\nYou need a key')
    player.use(key)
    map.destroyItem(this)
  }
}

