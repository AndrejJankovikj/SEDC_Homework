console.log("Hello");
function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}
let products = [
    new Product("Laptop", "Electronics", true, 120),
    new Product("Chair", "Furniture", false, 2.5),
    new Product("Headphones", "Electronics", true, 80),
    new Product("Backpack", "Fashion", false, 10),
    new Product("TV", "Electronics", true, 50),
    new Product("Dress", "Fashion", false, 3.5),
    new Product("Desk", "Furniture", false, 19),
    new Product("Smartphone", "Electronics", true, 60),
    new Product("Shoes", "Fashion", true, 50),
    new Product("Table", "Furniture", false, 15),
    new Product("Watch", "Fashion", true, 120),
    new Product("Coffee Maker", "Appliances", true, 30),
    new Product("Sofa", "Furniture", false, 300),
    new Product("Microwave", "Appliances", false, 9.9),
    new Product("T-shirt", "Fashion", true, 15),
    new Product("Apple", "Food", true, 2.5),
    new Product("Banana", "Food", false, 1.8),
    new Product("Carrot", "Food", true, 0.9),


];
products.filter(product => product.price > 20)
    .map(product => `the Product named ${product.name}, with the price of ${product.price} is one of the products priced over 20`)
    .forEach(product => console.log(product))

console.log("=================================");
console.log("=================================");

products.filter(product => product.category === "Food" && product.hasDiscount == true)
    .map(product => `The product ${product.name} is one of the products that's in the "Food" category and has a discount`)
    .forEach(product => console.log(product))

console.log("=================================");
console.log("=================================");
products.filter(product => product.hasDiscount == true)
    .map(product => `the product ${product.name} is on discount and is priced at the price of ${product.price}`)
    .forEach(product => console.log(product))

console.log("=================================");
console.log("=================================");

// NE znam da go napravam ova pa google mi pomogna
products.filter(product => /^[aeiou]/i.test(product.name) && product.hasDiscount !== true)
    .map(product => `The product ${product.name}'s name starts with a vowel and is not on discount`)
    .forEach(product => console.log(product));
