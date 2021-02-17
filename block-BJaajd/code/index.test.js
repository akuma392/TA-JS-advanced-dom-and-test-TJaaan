const methodsIndex = require('./index.js');

test('should remove 3 and return [1,2,4]', () => {
  expect(methodsIndex.removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

// test('should remove 3 and return [1,2,4]', () => {
//   expect(methodsIndex.Cart.addToCart()).toContain([1, 2, 4]);
// });

test('should [1,2,3,4] return [2,4,6,8]', () => {
  expect(methodsIndex.map([1, 2, 3, 4], (elm) => elm * 2)).toEqual([
    2,
    4,
    6,
    8,
  ]);
});

test('should [1,2,3,4] return 10', () => {
  expect(
    methodsIndex.map([1, 2, 3, 4], (acc, cv, index) => (acc = acc + cv))
  ).toEqual(10);
});
