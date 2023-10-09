"use strict";

console.log(products)

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
})

createProduct(product1);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product2);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product3);
console.log(`Added product: ${products[products.length - 1].title}`);
createProduct(product4);
console.log(`Added product: ${products[products.length - 1].title}`);

for (let product of products) {
  console.log(product);
}

let newproduct3 = new Product(
  "Shoes",
  "Shoes with sensors for men",
  "./resources/products/shoes.png",
  "pairs",
  10,
  200,
  "Clothing"
)

updateProduct(products[2].uuid, newproduct3);
console.log(`Updated product: ${products[2].title} 's \n UUID to: ${products[2].uuid} \n description to: ${products[2].description}`);

console.log(getProductById(products[2].uuid));

console.log(`Deleted product: ${products[3].title}`);
deleteProduct(products[3].uuid);

for (let product of products) {
  console.log("product: ", product);
}