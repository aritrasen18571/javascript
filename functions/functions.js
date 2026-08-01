// function loggedin(name) {
//     if (name === undefined) {
//         console.log("enter valid name");
//         return 
//     }
//     return `${name} just loggedIn`

// }
// function loggedin(name) {
//     if (!name) {
//         console.log("enter valid name");
//         return 
//     }
//     return `${name} just loggedIn`

// }
// console.log(loggedin(""));

function calculateCartPrice (...num1)//rest operator
{
    return num1
}
// console.log( calculateCartPrice(200,300,400));

function handleobject(object){
    console.log(` the item is ${object.item} and price is ${object.price}`);
    
}
 const item ={
    item: "Apple",
    price : 399
 }

 handleobject(item)