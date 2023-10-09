"use strict";

class ShoppingCartException {
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

class ProductProxy {
  constructor(productUuid, amount) {
    this.productUuid = productUuid;
    this.amount = amount;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
    this.productProxies = [];
  }

  get products() {
    return this._products;
  }

  set products(value) {
    this._products = [];
    // if type string -> parse JSON
    if (typeof value === "string") {
      value = JSON.parse(value);
    }
    // array -> for and create
    for (item in value) {
      this.products.push(Product.createFromObject(item));
    }
    //if single element -> create
    this.products.push(Product.createFromObject(value));
  }

  get productProxies() {
    return this._productProxies;
  }

  set productProxies(value) {
    throw new ShoppingCartException("Cannot modify directly, use correct methods.");
  }

addItem(productUuid, amount) {
  if (typeof productUuid !== "string") {
    throw new ShoppingCartException("Product UUID must be a string.");
  }
  if (typeof amount !== "number") {
    throw new ShoppingCartException("Amount must be a number.");
  }
  if (amount <= 0 || amount % 1 !== 0) {
    throw new ShoppingCartException("Amount must be a positive whole number.");
  }
  if (this.productProxies.find((product) => product.productUuid === productUuid)) {
    // if exists add amount to existing item
    const existingProduct = this.productProxies.find((product) => product.productUuid === productUuid);
    existingProduct.updateItem(productUuid, existingProduct.amount + amount);
  }
}

  updateItem(productUuid, newAmount) {
    // This function should update the amount of an item in the shopping cart to the new amount. If the new amount is invalid, throw an error. If the new amount is 0, remove the item from the shopping cart. Otherwise, update the amount of the item in the shopping cart.
    if (typeof productUuid !== "string") {
      throw new ShoppingCartException("Product UUID must be a string.");
    }
    if (typeof newAmount !== "number") {
      throw new ShoppingCartException("Amount must be a number.");
    }
    if (newAmount < 0 || newAmount % 1 !== 0) {
      throw new ShoppingCartException("Amount must be a positive whole number.");
    }
    if (newAmount == 0) this.removeItem(productUuid);

    // find -> update existing or throw error if not found
    const productIndex = this.productProxies.findIndex(
      (product) => product.productUuid === productUuid
    );
    if (productIndex === -1) {
      throw new ShoppingCartException("Product not found.");
    } else {
      this.productProxies[productIndex].amount = newAmount;
    }
  }

  removeItem(productUuid) {
    // find -> remove existing or throw error if not found
    const productIndex = this.productProxies.findIndex(
      (product) => product.productUuid === productUuid
    );
    if (productIndex === -1) {
      throw new ShoppingCartException("Product not found.");
    } else {
      this.productProxies.splice(productIndex, 1);
    }
    // use splice to remove item
  }

  calculateTotal() {
    let total = 0;
    // for products / proxies -> total += product.pricePerUnit * amount
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].pricePerUnit * this.productProxies[i].amount;
    }
    return total;
  }
}
