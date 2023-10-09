"use strict";

const products = [];

function getProducts() {
  return products;
}

function getProductById(uuid) {
  return products.find((product) => product.uuid === uuid);
}

function createProduct(product) {
  if (typeof product !== "object") {
    throw new ProductException("Product must be an object.");
  }
  products.push(Product.createFromObject(product));
}

function updateProduct(uuid, updatedProduct) {
  const productIndex = products.findIndex((product) => product.uuid === uuid);
  if (productIndex === -1) {
    throw new ProductException("Product not found.");
  }
  products[productIndex].updateItem(updatedProduct);
}

function deleteProduct() {
  const productIndex = products.findIndex((product) => product.uuid === uuid);
  if (productIndex === -1) {
    throw new ProductException("Product not found.");
  }
  products.splice(productIndex, 1);
}

function findProduct(query) {
  // query is a string formatted as "<category>:<title>". If the user only enters a category, return all products in that category. If the user only enters a title, return all products with that title. If the user enters both a category and a title, return all products in that category with that title.
  if (typeof query !== "string") {
    throw new ProductException("Query must be a string.");
  }
  const [category, title] = query.split(":");
  if (category && title) {
    return products.filter((product) => product.category === category && product.title === title);
  }
  if (category) {
    return products.filter((product) => product.category === category);
  }
  if (title) {
    return products.filter((product) => product.title === title);
  }
}