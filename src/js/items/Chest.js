class Chest extends Item {
  constructor (x, y, contains) {
    super(x, y)
    this.contains = new itemMap[contains]()
    this.solid = true
    this.sprite.sx = 88
    this.open = false
  }

  interact () {
    if (this.open) return
    this.open = true
    this.sprite.sx = 96
    player.add(this.contains)
    showText(`You found\n${this.contains.description}`)
  }
}

