// Object.create// Constructor method

//*******Singleton*****

//Object Literal
const sym = Symbol("keyofsym")
const user = {
    name: "Aritra",
    "Fullname": "Aritra Sen",
    [sym]:"here is the symbol",//proper way to use a symbol as a key
    age: 18,
    Location: "India",
    email: "aritra@gmail.com",
    isloggedin: false,
    loggedDays: ["Monday", "Friday"]
}

// console.log(user.email);//aritra@gmail.com
// console.log(user["email"]);//aritra@gmail.com
// console.log(user["Fullname"]);
// console.log(user[sym]);//proper way to get the refered value

// Object.freeze(user)//locking the object unable to changes
user.email = "sen@gmail"
// console.log(user);

user.greeting = function(){
    console.log("hey bhai Whatsup ");
    
}
user.greetingtwo = function(){
    console.log(`hey ${this.name} bhai Whatsup `);//String interpolation
    
}
user.greeting();
user.greetingtwo();//hey Aritra bhai Whatsup
 
