// # Primitive
// 7
// 1. Number
// 2. BigInt
// 3. String
// 4. Boolean
// 5. null 
// 6. undefined
// 7.  symbol

// # Reference point
// 1. Object
// 2. Array
// 3. function

// Dyanamic type 

const score = 100;
const scoreValue = 200.34;// NumberType

const isLoggedIn = false; // booleam
const outsideTemp = null;
let userEmail ;

const id = Symbol("123");
const anotherId = Symbol("1234");

console.log(id === anotherId);

const bigNumber = 283747868276863487617864;// => still a number
const bigNumber1 = 234927498724729749834839n;



// # Non Primitive DataTypes Pass by reference;

// 1. Array
// 2. Object
// 3. Functions

// Array
const hero = ['sakitman', 'naagraj', 'doga'];

// Object 
let Obj = {
    name: "Aditya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

// Typeof Array => object and same to all other

// function => object function


//////////////////////////////////////////////////////////////////////////////////////////////////

//   Stack(Primitive )  vs Heap (Non-Primitive)



let myYotubename = "theadityakumar2810@gmail.com"

let anothername = myYotubename;
anothername = "newaditya";

console.log(myYotubename);
console.log(anothername);


let userOne = {
    email: "thegmail@gmail.com",
    upi: "user@upi.com"
}

let userTwo = userOne

userTwo.email = "no2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
