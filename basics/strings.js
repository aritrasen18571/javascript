const name = " Aritra "
const age = 20
// console.log(name + age + " hey "); //NOT RECOMMEND

console.log(`hey my name is ${name} and my age is ${age}`);// string interpolation

const gamename = new String("Valorant")// string is an Object

// console.log(gamename.toUpperCase()); // in heap not original value

// console.log(gamename.charAt(2));//index of 2nd position

// console.log(gamename.indexOf("a"));//index of character


// substring
const newtsr = gamename.substring(0, 4)// 4 => 3  (1 less)
// console.log(newtsr);

const newstring = gamename.slice(-8, 2)
console.log(newstring);

const string = "  hey bro i am back  "; // only last and first gaps
console.log(string);
console.log(string.trim());

const url = "https:%20//google%20.com%20//facebook%20"
console.log(url.replaceAll("%20", "_"))//replacing
ls
console.log(url.includes("hey"));//fae

// spiliting based on character

const hi = new String("hey-i-am-sen")
console.log(hi.split("-"));//[ 'hey', 'i', 'am', 'sen' ] based on "-"



