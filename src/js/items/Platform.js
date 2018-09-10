class Platform extends Item {

  constructor (props) {
    super(props)
    this.counter = 0

    this.from = { x: props.x, y: props.y }
    this.to = {
      x: props.toX ? +props.toX : props.x,
      y: props.toY ? +props.toY : props.y
    }
    this.target = {
      x: this.to.x,
      y: this.to.y,
    }
  }

  update (tick) {
    this.counter += tick
    if (this.counter > 600) {
      this.counter = 0
      this.move()
    }
  }

  move () {
    if (this.target.x) {
      if (this.target.x > this.x) {
        this.x += 1
      } else if (this.target.x < this.x) {
        this.x -= 1
      }
      if (this.x === this.target.x) {
        if (this.x === this.from.x) {
          this.target.x = this.to.x
        } else if (this.x === this.to.x) {
            this.target.x = this.from.x
        }
      }
    }
    if (this.target.y) {
      if (this.target.y > this.y) {
        this.y += 1
      } else if (this.target.y < this.y) {
        this.y -= 1
      }
      if (this.y === this.target.y) {
        if (this.y === this.from.y) {
          this.target.y = this.to.y
        } else if (this.y === this.to.y) {
          this.target.y = this.from.y
        }
      }
    }

    if (player.onPlatform === this) {
      player.goTo(this.x, this.y)
    }

  }

  enter () {
    player.onPlatform = this
  }

  leave () {
    player.onPlatform = false
  }
}

