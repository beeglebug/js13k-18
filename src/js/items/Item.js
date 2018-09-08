class Item {
  constructor (x, y) {
    this.x = +x
    this.y = +y
    this.sprite = new Sprite(0, 0)
    this.sy = 0
    this.solid = false
  }

  interact () {}

  render () {
    if (!this.sprite.visible) return
    renderSprite(
      this.sprite.image,
      this.sprite.sx,
      this.sprite.sy,
      this.x * TILE_SIZE,
      this.y * TILE_SIZE
    )
  }
}
