class Spikes extends Item {

  constructor (x, y) {
    super(x, y)
    this.sprite.sx =72
  }

  interact () {
    player.damage(1)
    player.locked = true
    setTimeout(() => {
      player.goBack()
      player.locked = false
    }, 600)
  }
}

