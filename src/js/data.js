const rooms = [
  [
    '111111111111 111',
    '1              1',
    '1              1',
    '1              1',
    '1    111111    1',
    '1    1    1    1',
    '1    1         1',
    '1    1    1     ',
    '1    111111    1',
    '1              1',
    '1              1',
    '1       11111111',
    '1       1      1',
    '1       1      1',
    '1       1       ',
    '1111111111111111',
  ],
  [
    '       1111    ',
    '       1  1    ',
    '       1  1    ',
    '       1  1    ',
    '       1  1    ',
    '       1  1    ',
    '       1  1    ',
    '       1  1    ',
    '11111111  111111',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '111111111111 111',
  ],
  [
    '1111111111111111',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '               1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '1              1',
    '111 1          1',
    '    1          1',
    '1111111111111111',
  ],
].map(room => room.map((row, y) => row.split('').map((id, x) => {
  if (id === ' ') return null
  // TODO some tiles no collision
  return { id, x, y, width: TILE_SIZE, height: TILE_SIZE, collision: true }
})))

const world = [
  '1 ',
  '02'
].map(str => str.split('').map(t => t === ' ' ? null : t))
