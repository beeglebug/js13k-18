class Spikes extends Item {

  constructor (x, y) {
    super(x, y)
    this.sprite.sx = 72
    this.sprite.visible = false
    this.retracted = true
    this.counter = 0
  }

  interact () {
    if (this.retracted) return
    player.damage(1)
    player.locked = true
    setTimeout(() => {
      player.goBack()
      player.locked = false
    }, 200)
  }

  update (tick) {
    this.counter += tick
    if (this.counter > 1000) {
      this.counter = 0
      this.toggle()
    }
  }

  toggle () {
    this.retracted = !this.retracted
    this.sprite.visible = !this.sprite.visible
  }
}

