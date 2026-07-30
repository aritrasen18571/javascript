//Stack(primative), get copy
//Heap(NON-primative), changes in original
// 
let fststack = "aritra"
let sndstack = fststack //get by copy not able to change
sndstack = "sen"
console.log(fststack);
console.log(sndstack);

let userone = {
    email: "aritrasen@gmail.com",
    upi: "sen@ybl"
}
let usertwo = userone // get by reference in heap able to change in heap
{

}
usertwo.email = "hey@gmail"
console.log("userone " + userone.email);//hey@gmail
console.log("usertwo " + usertwo.email);//hey@gmail
