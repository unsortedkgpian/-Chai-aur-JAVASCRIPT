const userEmail ="Aditya@aditya.com";


if (userEmail) {
    console.log('Got the user Email');      
} else {
    console.log('User is not log in');
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++ Falsy value  +++++++++++

// false
// 0
// -0
// BigInt 0n
// "" empty string
// null
// undefined
// NaN

// +++++++++ Truthy Value +++++++++++++++++++++
// "0"
// 'false'
// " "
// []
// {}=> empty object
// function(){} => empthy funtion


// How to check for array

const Arr = [];

if (Arr.length == 0  ) {
    console.log('The array is empty');
}


// How to check for Object

const Obj = {}

if (Object.keys(Obj).length === 0) {
    console.log('It is empty object');
}


// false == 0 => true
// false == '' => true
// 0 == '' => true



// Nullish Coalesing Operator (??): null undefined

let val1;
console.log(`Step 1 : ${val1}`);

val1 = 5 ?? 10
console.log(`Step 2 : ${val1}`);

val1 = undefined ?? 6
console.log(`Step 3 : ${val1}`);

val1 = null?? 4
console.log(`Step 4 : ${val1}`);

val1 = null?? NaN
console.log(`Step 5 : ${val1}`);

val1 = null?? undefined
console.log(`Step 6 : ${val1}`);

val1 = undefined ?? null
console.log(`Step 7 : ${val1}`);


// Terniary Operator

// condition ? true : false

const id = 54;

id >=10 ? console.log(`${id} is greater than 9`) : console.log(`${id} is less than 10`);