class Lever extends Item {
  constructor (props) {
    super(props)
    this.targetId = props.targetId
    this.solid = true
    this.isOn = false
  }

  interact () {
    const target = map.getItemById(this.targetId)
    target.activate()
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

