class Spikes extends Item {

  constructor (x, y) {
    super(x, y)
    this.sx = 72
  }

  interact () {
    player.damage(1)
  }
}

