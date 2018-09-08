class Room {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.data = []
    this.items = []
    this.entrance = { x: 7, y: 7 }
  }

  getTileAt (x, y) {
    const row = this.data[y]
    return row && row[x]
  }

  getItemAt (x, y) {
    return this.items.find(i => i.x === x && i.y === y)
  }

  setEntrance (x, y) {
    this.entrance.x = x
    this.entrance.y = y
  }
}
