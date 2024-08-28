const products = ['Laptop Acer', 'iPhone 15 Pro Max', 'Macbook', 'TV Sony', 'Samsung Galaxy S20'];
const prices = [3800, 1200, 2500, 1300, 1000];
//map
const productList = products.map((product, index) => ({
    name: product,
    price: prices[index]
}));
console.log(productList);

//filter
const expensiveProducts = products.map((product, index) => ({
    name: product,
    price: prices[index]
})).filter(product => product.price > 1200);
console.log(expensiveProducts);

//some
const hasExpensiveProducts = products.map((product, index) => ({
    name: product,
    price: prices[index]
})).some(product => product.price > 1200);
console.log("Có sản phẩm nào lớn hơn 1200 không ?", hasExpensiveProducts)
//everry
const allExpensiveProducts = products.map((product, index) => ({
    name: product,
    price: prices[index]
})).every(product => product.price > 4000);
console.log("Tất cả sản phẩm có giá lớn hơn 4000 không ?", allExpensiveProducts);

//map by name
const productNames = productList.map(product => product.name);
console.log(productNames);

//reduce
const totalPrice = productList.reduce((acc, product) => acc + product.price, 0);
console.log("Total All Product: ", totalPrice);

//forEach
productList.forEach(product => {
    console.log(`Name: ${product.name} - Price: ${product.price}`);
});

//findIndex
const findfindIndex = productList.findIndex(product => product.price === 1000);
console.log("find Index of product price 1000: ", findfindIndex);

//includes
const hasMacbook = products.includes('Macbook');
console.log("Có Macbook không ?", hasMacbook);

