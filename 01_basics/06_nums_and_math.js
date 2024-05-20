const score = 400;
console.log(score);

const balance = new Number(400);

console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 29.3837862;

console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));


const hundereds = 1000000000;
console.log(hundereds.toLocaleString());
console.log(hundereds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.EPSILON);



// ++++++++++++++++++++++++++++++++++++++++++    Maths      ++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);//=> object

console.log(Math.abs(-23));
console.log(Math.round(3.23));
console.log(Math.ceil(3.23));
console.log(Math.floor(3.23));

console.log(Math.min(2,3,3,4,1,4));
console.log(Math.max(2,3,3,4,1,4));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;     

console.log(Math.floor(Math.random()*(max - min + 1)) + min);