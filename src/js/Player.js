class Player {

  reset () {
    this.x = 7
    this.y = 7
    this.sx = 0
    this.wx = 0
    this.wy = 0
    this.inventory = []
    this.health = 3
    this.maxHealth = 3

    // find spawn
    flat(world.rooms).some(room => {
      const spawn = room.items.find(item => item.type === ITEM_SPAWN)
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

  get (type) {
    return this.inventory.find(item => item.type === type)
  }

  damage (amount) {
    this.health -= amount
    if (this.health <= 0) return this.kill()
  }

  kill () {
    showText('You died')
    state = STATE_DEAD
    return true
  }
}
