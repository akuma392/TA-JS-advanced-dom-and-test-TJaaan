function removeFromArray(arr = [], num) {
  return arr.filter((elm) => !(elm == num));
}

class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }
}

function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}
function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
    acc = reducer(acc, items[index], index, items);
  }
  return acc;
}
module.exports = {
  removeFromArray,
  Cart,
  map,
  reduce,
};
