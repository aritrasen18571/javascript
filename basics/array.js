const Arr = [1, 2, 3, 4]
// const Arr = new Array(1, 2, true, "sen")
// console.log(typeof Arr[2]);

Arr.push(5)
// Arr.push(false)
// console.log(Arr);
Arr.unshift(4) // 4 is in 1st position
Arr.shift()
// console.log(Arr);// 4 removed
// console.log(Arr.includes(3));//true
// console.log(Arr.indexOf(0));//-1

const newarr = Arr.join() 
// console.log( newarr);//1,2,3,4,5
// console.log( typeof newarr);//string

//slice ,splice
const sarr = [1,2,3,4,5,6,7,8,]
// console.log("or",sarr);//[1,2,3,4,5,6,7,8,]
// console.log("slice",sarr.slice(1,3));//[ 2, 3 ] makes a copy of the original array
// console.log("or",sarr);
// console.log("splice",sarr.splice(1,3)); //[ 2, 3, 4 ]
// console.log("or",sarr);//[ 1, 5, 6, 7, 8 ] manupulates the original array

//  Concat

const fruits = ["Apple","Banana","Mango"]
const Vehicle = ["Car","Van","Bike"]
// const arrr =fruits.push(Vehicle)
const arrr = fruits.concat(Vehicle);
// console.log(arrr);//[ 'Apple', 'Banana', 'Mango', 'Car', 'Van', 'Bike' ]
 const all = [...fruits,...Vehicle]
// console.log(all);
// console.log(typeof (fruits));
// console.log(typeof (Vehicle));

const arr3 = [10, [20, [30, 40]], 50];
const new_arr3 = arr3.flat(Infinity)
// console.log(new_arr3);//[ 10, 20, 30, 40, 50 ]

// data scraping

// console.log(Array.isArray("sen"));
// console.log(Array.from("sen"));
// console.log(Array.from({name:"sen"}));//empty array {name:"sen"} an object not an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4));
