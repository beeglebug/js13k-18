
function collideRectRect (rect1, rect2, response = {}) {

  // half widths and half heights
  const hw1 = rect1.width / 2
  const hw2 = rect2.width / 2
  const hh1 = rect1.height / 2
  const hh2 = rect2.height / 2

  // calculate the centers of the two rects
  const c1 = { x: rect1.x + rect1.width / 2, y: rect1.y + rect1.height / 2 }
  const c2 = { x: rect2.x + rect2.width / 2, y: rect2.y + rect2.height / 2 }

  // the distances between the two centers
  const distance = {
    x: Math.abs(c1.x - c2.x),
    y: Math.abs(c1.y - c2.y)
  }

  // the total widths and heights
  const totalWidth = hw1 + hw2
  const totalHeight = hh1 + hh2

  // check separating axis
  if (totalWidth <= distance.x) return false
  if (totalHeight <= distance.y) return false

  const x = totalWidth - distance.x
  const y = totalHeight - distance.y

  // calculate the response
  // which axis has the shortest distance to separate?
  if (Math.abs(x) < Math.abs(y)) {
    if (c1.x - c2.x < 0) { response.x = -x }
    else { response.x = x }
  } else {
    if (c1.y - c2.y < 0) { response.y = -y }
    else { response.y = y }
  }

  return true
}

