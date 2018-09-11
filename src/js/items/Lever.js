class Lever extends Item {
  constructor (props) {
    super(props)
    this.resetAfter = props.resetAfter || -1
    this.targets = props.targets.split(',').map(t => +t)
    this.solid = true
    this.isOn = false
    this.counter = 0
  }

  update (tick) {
    if (this.isOn && this.resetAfter) {
      this.counter += tick
      if (this.counter > this.resetAfter) {
        this.counter = 0
        this.interact()
      }
    }
  }

  interact () {
    this.targets.map(id => map.getItemById(id)).forEach(t => t.activate())
    return this.isOn ? this.turnOff() : this.turnOn()
  }

  turnOn () {
    this.isOn = true
    this.sprite.sx += TILE_SIZE
  }

  turnOff () {
    this.isOn = false
    this.sprite.sx -= TILE_SIZE
  }

}

