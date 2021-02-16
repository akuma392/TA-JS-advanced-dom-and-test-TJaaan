const methodsIndex = require('./index.js');

test('should remove 3 and return [1,2,4]', () => {
  expect(methodsIndex.removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

// test('should remove 3 and return [1,2,4]', () => {
//   expect(methodsIndex.Cart.addToCart()).toContain([1, 2, 4]);
// });
