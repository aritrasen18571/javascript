//*****Primative*****
// call by value like making a copy of original data
// 7 types : string, number , boolean , null ,undefined,Symbol,BigInt



// Reference Type ***(Non-Primative)****
//These store a reference (memory address) instead of the actual value.
//  ex=> Array, Objects, Function

// *****Typeof****

const sum = ((a, b) => {
    return a + b
})
let obj = {
    name: "Aritra",
    age: 20,

}
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(typeof (id));

// console.log("The sum is " + sum(3, 4));
// console.log("The type is  " + typeof (sum));// function
// console.log("The type is  " + typeof (sum()));// number cause the function called and return a number

