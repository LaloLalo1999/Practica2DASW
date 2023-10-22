"use strict";
console.log(products)
// Create products
let product1 = new Product(
  "Headphones",
  "Noise cancelling headphones",
  "./resources/products/headphones.png",
  "units",
  10,
  200,
  "Electronics"
);
let product2 = new Product(
  "Jacket",
  "Men's jacket",
  "./resources/products/jacket.png",
  "units",
  30,
  120,
  "Clothing"
)
let product3 = Product.createFromObject({
  "title": "Shoes",
  "description": "Shoes with sensors in the soles",
  "imageUrl": "./resources/products/shoes.png",
  "unit": "pairs",
  "stock": 15,
  "pricePerUnit": 50,
  "category": "Clothing"
});
let product4 = Product.createFromObject({
  "title": "Smartwatch",
  "description": "Smartwatch with GPS",
  "imageUrl": "./resources/products/smartwatch.png",
  "unit": "units",
  "stock": 54,
  "pricePerUnit": 200,
  "category": "Electronics"
});
// Add products to the array and console log them
createProduct(product1);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product2);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product3);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product4);
console.log(`Added product: ${products[products.length - 1].title}`);

// Show all products
for (let product of products) {
  console.log(product);
}

// Create a new product to replace product 3
let newproduct3 = new Product(
  "Shoes",
  "Shoes with sensors for men",
  "./resources/products/shoes.png",
  "pairs",
  10,
  200,
  "Clothing"
)

// Update product 3
updateProduct(products[2].uuid, newproduct3);
console.log(`Updated product: ${products[2].title} 's \n UUID to: ${products[2].uuid} \n description to: ${products[2].description}`);

// Console log the product 3 getting it by its uuid
console.log(getProductById(products[2].uuid));

// Delete product 3
console.log(`Deleted product: ${products[3].title}`);
deleteProduct(products[3].uuid);

// Show all products
for (let product of products) {
  console.log("product: ", product);
}

// Make 3 searches with different queries, one by category, one by title, and one by both
// Create queries
const query1 = "Clothing:";
const query2 = ":Shoes";
const query3 = "Electronics:Headphones";

// Find products
(findProduct(query1)).forEach(item => console.log(`Query: ${query1}, uuid: ${item.uuid}`));
(findProduct(query2)).forEach(item => console.log(`Query: ${query2}, uuid: ${item.uuid}`));
(findProduct(query3)).forEach(item => console.log(`Query: ${query3}, uuid: ${item.uuid}`));

// Test shopping_cart.js
// Add 3 items from products to a new ShoppingCart instance
const shoppingCart = new ShoppingCart();
shoppingCart.addItem(products[0].uuid, 1);
shoppingCart.addItem(products[1].uuid, 2);
shoppingCart.addItem(products[2].uuid, 3);

// Show shopping cart
console.log(shoppingCart);

// Update item in shopping cart
console.log(shoppingCart.productProxies[0].amount);
shoppingCart.updateItem(products[0].uuid, 5);
console.log(shoppingCart.productProxies[0].amount);

// Remove item from shopping cart
shoppingCart.removeItem(products[2].uuid);
console.log(shoppingCart);

// Calculate total
console.log(shoppingCart.calculateTotal());