const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
//x2 numbers
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);
//fillter 
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
//sum
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);


// use 2 arr
const products = ['Laptop Acer', 'iPhone 15 Pro Max', 'Macbook', 'TV Sony', 'Samsung Galaxy S20'];
const prices = [3800, 1200, 2500, 1300, 1000];

//fillter experience
const expensiveProducts = products.map((product, index) => ({
    name: product,
    price: prices[index]
})).filter(product => product.price > 2000);
console.log(expensiveProducts);

//sum experience
const totalPrice =expensiveProducts.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

