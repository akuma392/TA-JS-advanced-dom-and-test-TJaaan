<!-- # Writing Test Using Jest

Write the function in `index.js` file and also write the test in `index.test.js` file for the following functions. While writing test make sure you write at-least 3 positive and 3 negative test.

- Positive Test verifies expected behavior with valid data.
- Negative Test verifies expected behavior with invalid data.
- Edge Case is a subset of positive tests, which checks the extreme edges of valid values.

1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`

2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.

3. Create 2 functions that calculate properties of a circle, using the definitions here.

- Create a function called `getCircumfrence`:

Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

- Create a function called `getArea`:

Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`. -->

# Writing Test Using Jest

1.

Write the test for the class below

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }
}
```

2. Write test for the content of `calculator.js` file.

3. Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```js
function removeFromArray() {}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

Write three test for `removeFromArray` function

4. List 10 examples of `Matchers` form [https://jestjs.io/docs/en/using-matchers](https://jestjs.io/docs/en/using-matchers). Try to have different methods of different types

Numbers

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

Boolean

```js
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

Strings

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

5. Write three test for the following function.

```js
function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}
```

```js
function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
   acc = reducer(acc, items[index], index, items));
  }
  return acc;
}
```

Hint: You can use this link to learn about how to mock function while testing [https://jestjs.io/docs/en/mock-functions](https://jestjs.io/docs/en/mock-functions)
