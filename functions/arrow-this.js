const user = {
    username: "Aritra",
    price: 999,
    // welocomemassage: function () {
    //     // console.log(`hello ${this.username} bhai `);
    //     // console.log(this);


    // }
}
// user.welocomemassage()
// user.username = "Sen"
// user.welocomemassage()
// console.log(this);

const chai = () => {
    let username = "hitesh"
    console.log(this); //empty object only works in obects
}


// chai()

const addTwo = (num1, num2) => {
    return num1 + num2 // explementation 
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )// implementation of return statement

const addTwo = (num1, num2) => ({ username: "hitesh" })


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()