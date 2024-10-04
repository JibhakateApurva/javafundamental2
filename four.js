const products = [
    {
        name : "Laptop",
        price : 12000,
    },
    {
        name : "Mobile",
        price : 11000,
    },
    {
        name : "smartphone",
        price : 10000,
    },
    {
        name : "smartwatch",
        price : 9000,
    },
    {
        name : "headphones",
        price : 8000,
    },
    {
        name : "bluetooth",
        price : 7000,
    },
];

let maxProduct = { name: "", price: 0 };
let minProduct = { name: "", price: Number.MAX_VALUE};

for ( let product of products) {
    if ( product.price > maxProduct.price ) {
        maxProduct = product;
    }
    if ( product.price < minProduct.price ) {
        minProduct = product;
    }
}
console.log( ` The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
console.log( ` The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`);
