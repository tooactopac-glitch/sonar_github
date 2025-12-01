const {sum} = require("./index")

test('sum should return the sum of two nbrs', () => {
  expect(sum(10,10)).toBe(20)
})
