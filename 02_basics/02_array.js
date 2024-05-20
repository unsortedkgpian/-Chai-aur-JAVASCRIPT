const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["Superman", "batman", "flash"];

// marvel_heros.push(dc_heros);
const Allheros = marvel_heros.concat(dc_heros);// => return new array
// console.log(marvel_heros);
console.log(Allheros);

// Sprede operator

const newAllheros = [...marvel_heros, ...dc_heros];
console.log(newAllheros);

const another_Array = [ 1, 2, 3, 4, [5, 6], [3, 4, 6]];
const jon_array = another_Array.flat(Infinity);// we can give the no of depth to which we have to solve
console.log(jon_array);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));

console.log(Array.from({name: "Aditya"})); // return empty array we have to give the referece point


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3, another_Array, newAllheros));
