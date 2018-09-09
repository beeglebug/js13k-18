class Thorns extends Item {

  constructor (x, y) {
    super(x, y)
    this.sprite.sx = 120
    this.solid = true
    this.cut = false
  }

  interact () {
    if (this.cut) return
    if (player.has(Shears)) return this.cutDown()
    player.damage()
  }

  cutDown () {
    this.cut = true
    this.solid = false
    this.sprite.sx = 128
  }
}

