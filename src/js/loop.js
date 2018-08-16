const FPS = 60

let now,
  dt,
  last,
  accumulator = 0,
  delta = 1000 / FPS,
  step = 1 / FPS

function tick() {
  requestAnimationFrame(tick)

  now = performance.now()
  dt = now - last
  last = now

  // prevent updates with large dt
  if (dt > 1000) return

  accumulator += dt

  while (accumulator >= delta) {
    update(step)
    accumulator -= delta
  }

  render()
}

function start () {
  last = performance.now()
  requestAnimationFrame(tick)
}
