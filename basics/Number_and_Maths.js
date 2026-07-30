const number = 100
// console.log(number);//100
// console.log(typeof number);//number

const balance = new Number(400)
// console.log(balance);//[Number: 400]
// console.log(typeof balance);//object
// console.log(balance.toString());//converted to string
// console.log(balance.toString().length);//3 cause 1 0 0 = 3
// console.log(balance.toFixed(3));//400.000 presice to decimal


const decimal = new Number(678.997)
const little = new Number(18.1276)
// console.log(decimal);//[Number: 678.997]
// console.log(typeof decimal);//object
// console.log(decimal.toString());//converted to string
// console.log(decimal.toString().length);//7 cause 6 7 8 . 9 9 7
// console.log(decimal.toFixed(2));//679.00 presice to decimal
// console.log(little.toPrecision(4));//round of 18.13

const hundreds = 100000 //5 zeros
// console.log(hundreds.toLocaleString('en-US'));//100,000 currency form in US standard
// console.log(hundreds.toLocaleString('en-IN'));//1,00,000 currency form in US standard

//**************MATHS******************

// console.log(Math.abs(-67));//67  make neg to positive(absolute value)
// console.log(Math.round(4.89));//5 round of
// console.log(Math.ceil(4.2));//5  up of 4.2 = 5
// console.log(Math.floor(4.9));//5  down of 4.2 = 4
// console.log(Math.min(3,5,7,9,2,1,1));//1  min 
// console.log(Math.max(3,5,7,9,2,1,1));//9  max

// console.log(Math.random()); //0 < x < 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
const random = Math.floor((Math.random() * (max - min + 1)) + min)
console.log(random);
