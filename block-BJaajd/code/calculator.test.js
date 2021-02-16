const methods = require('./calculator.js');

test('addition of 5 and 10 is 15', () => {
  expect(methods.add(10, 5)).toEqual(15);
});

test('addition of 10 and 5 is 5', () => {
  expect(methods.subtract(10, 5)).toEqual(5);
});

test('addition of 5 and 10 is 15', () => {
  expect(methods.sum(10, 5)).toEqual(15);
});
test('addition of 5 and 10 is 50', () => {
  expect(methods.multiply(10, 5)).toEqual(50);
});
test('addition of 2 and 3 is 8', () => {
  expect(methods.power(2, 3)).toEqual(8);
});
