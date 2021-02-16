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

module.exports = {
  removeFromArray,
  Cart,
};
