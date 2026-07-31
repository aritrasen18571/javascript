const facebookuser = new Object()
facebookuser.id = "161ahb"
facebookuser.name = "Aritra"
facebookuser.loggedin = false

// console.log(facebookuser);
const instauser = {
    email: "sen@gmmail.com",
    fullname:{
        userfullname:{
            firstname:"Aritra",
            lastname:"Sen"
        }
    }
}
console.log(instauser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b",
    3:"c",
}
const obj2 = {
    4:"d",
    5:"e",
    6:"f",
}
const obj3 = {
    7:"g",
    8:"h",
    9:"i",
}
const objf = Object.assign({},obj1,obj2,obj3)//important 1st is target 2nd is source

// const obj10 = {...obj1,...obj2,...obj3}//best use
// console.log(obj10);

console.log(Object.keys(facebookuser));
console.log(Object.values(facebookuser));
console.log(Object.entries(facebookuser));
console.log(facebookuser.hasOwnProperty("name"));

