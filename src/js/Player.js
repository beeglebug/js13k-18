class Player {

  reset () {
    this.x = this.previousX = 7
    this.x = this.previousY = 7
    this.sprite = new Sprite(0, 0)
    this.wx = 0
    this.wy = 0
    this.inventory = []
    this.health = 3
    this.maxHealth = 3
    this.locked = false

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

  getItemOfType (type) {
    return this.inventory.find(item => item instanceof type)
  }

  damage (callback, delay) {
    if (this.locked) return
    this.locked = true
    this.health -= 1
    if (this.health <= 0) return this.kill()
    setTimeout(() => {
      this.locked = false
      callback()
    }, delay)
  }

  kill () {
    showText('You died')
    state = STATE_DEAD
    return true
  }

  goTo (x, y) {
    console.log('goTo')
    this.previousX = this.x
    this.previousY = this.y
    this.x = x
    this.y = y
  }

  goBack () {
    this.x = this.previousX
    this.y = this.previousY
  }

  fall () {
    this.sprite.sx = 48
    this.damage(() => {
      this.sprite.sx = 0
      this.goTo(map.entrance.x, map.entrance.y)
    }, 600)
  }

  render () {
    if (state === STATE_DEAD) return
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
