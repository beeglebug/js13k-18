class Lever extends Item {
  constructor (props) {
    super(props)
    this.targets = props.targets.split(',').map(t => +t)
    this.solid = true
    this.isOn = false
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

