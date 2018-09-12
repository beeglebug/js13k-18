class Player {

  reset () {
    this.previous = {}
    this.x = this.previous.x = 7
    this.y = this.previous.y = 7
    this.sprite = new Sprite(0, 0)
    this.wx = 0
    this.wy = 0
    this.inventory = []

    // statuses
    this.locked = false
    this.onPlatform = false

    // find spawn
    flat(world.rooms).some(room => {
      const spawn = room.getItemOfType(Spawn)
      if (!spawn) return false
      this.x = spawn.x
      this.y = spawn.y
      this.wx = room.x
      this.wy = room.y
    })
  }

  add (item) {
    this.inventory.push(item)
  }

  use (item) {
    this.inventory = this.inventory.filter(i => i !== item)
  }

  has (type) {
    return this.inventory.find(item => item instanceof type)
  }

  getItemOfType (type) {
    return this.inventory.find(item => item instanceof type)
  }

  goTo (x, y) {
    this.previous.x = this.x
    this.previous.y = this.y
    this.x = x
    this.y = y
  }

  goBack () {
    this.x = this.previous.x
    this.y = this.previous.y
  }

  fall () {
    if (this.onPlatform) return
    this.sprite.sx = 48
    this.locked = true
    setTimeout(() => {
      this.sprite.sx = 0
      this.locked = false
      this.goTo(map.entrance.x, map.entrance.y)
    }, 600)
  }

  render () {
    renderSprite(
      this.sprite.image,
      this.sprite.sx,
      this.sprite.sy,
      this.x * TILE_SIZE,
      this.y * TILE_SIZE
    )
  }

}

function flat (arr) {
  return arr.reduce((acc, val) => acc.concat(val), [])
}
