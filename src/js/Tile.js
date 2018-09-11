class Tile {

  constructor (x, y, type) {
    this.x = x
    this.y = y
    this.type = type

    const ix = type - 1
    const width = 16
    const sy = Math.floor(ix / width)
    const sx = ix % width

    this.solid = !nonSolidTiles[type]
    this.damage = !!damagingTiles[type]

    this.sprite = new Sprite(sx * TILE_SIZE, sy * TILE_SIZE, tiles)
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


function getTileData (type) {
  return {
    type,
    sy: 0,
    sx: (type - 1) * TILE_SIZE,
    ...(tileData[type] || {})
  }
}

const nonSolidTiles = {
  0: true,
  1: true,
  9: true,
  10: true,
  11: true,
}

const damagingTiles = {
  10: true
}
