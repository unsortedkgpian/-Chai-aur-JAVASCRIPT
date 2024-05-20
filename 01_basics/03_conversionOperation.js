// let score = "33";
// let score = 33;
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = false;
let score = "Aditya";

// console.log(typeof score);
// console.log(typeof(score));// as a method inside a panatheses;

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN  // Not a number // type => number
// true => 1 / false => 0

// let isLoggedIn = 1; => true
// let isLoggedIn = ""; => false
// let isLoggedIn = null; => false
// let isLoggedIn = undefined; => false
let isLoggedIn = " "; //=> true;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log( typeof booleanIsLoggedIn);

let someNumber = 33;

let stringSomeNumber = String (someNumber);

// console.log( stringSomeNumber);
// console.log(typeof stringSomeNumber);



/********************Operations******************************************/

let value = 3
let negValue = -value;

// console.log(negValue);
// console.log( 2 + 2);
// console.log( 2 - 2);
// console.log( 2 * 2);
// console.log( 2 ** 2);
// console.log( 2 / 2);
// console.log( 2 % 2);

let str1 = "Hello"
let str2 = " Aditya"

let str3 = str1 + str2 ;
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log ( 2 * 4 - 3 );

console.log(true);
console.log(+true);
// console.log(true+); => error 
console.log(+"");

let num1 , num2 , num3 ;

num1 = num2 = num3 = 2+2;
console.log(num1)

let gameCounter = 1;
gameCounter ++;

console.log(gameCounter);
