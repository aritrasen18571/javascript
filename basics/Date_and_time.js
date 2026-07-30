//Dates
// let hey = new Date()
// console.log( hey.toString()); //Thu Jul 30 2026 00:59:45 GMT+0530 
// console.log( hey.toDateString());//Thu Jul 30 2026 
// console.log( hey.toISOString());//2026-07-29T19:29:45.538Z
// console.log( hey.toLocaleDateString());//30/7/2026
// console.log( hey.toLocaleTimeString());//12:59:45 am
// console.log( hey.toTimeString());//00:59:45 GMT+0530 (India Standard Time)
// console.log( hey.toUTCString());//Wed, 29 Jul 2026 19:29:45 GMT
// console.log( hey.toJSON());//2026-07-29T19:29:45.538Z

// const anydate = new Date(2006,4,9,5,32,78)// 9/5/2006, 5:33:18 am
// const anydate = new Date(2006,4,9,5,32,78)// 9/5/2006, 5:33:18 am
// const anydate = new Date("2006-05-09")
// const anydate = new Date("2006-05-09")
// //Months starts with 0 index jan = 0

// console.log(anydate.toLocaleString());

// let timestamp = Date.now()
// console.log(timestamp);
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate.toLocaleDateString()); //30/7/2026
// console.log(newdate.getMonth() + 1);
// console.log(newdate.getDay());

let week = newdate.toLocaleString('default',{
    weekday:"long",
    //ctrl+space
})

console.log(week);

