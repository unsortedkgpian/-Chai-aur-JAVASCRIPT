// for of

// ["", "", ""];

// [{}, {}, {}];


// For of loop

// for (const iterator of object) { // here Object means on which you want to apply the loop
    
// }


const myArr = [ 1, 2, 3,4,5]
for (const iterator of myArr) {
    console.log(iterator);
}

const greetings  = "Hello World!"
for (const i of greetings) {
    console.log(i);
}


// Maps => Object
console.log(typeof Map);// => function

const map = new Map();

map.set('IN', "India");
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('IN', "Indian");

console.log(map);

for (const keys of map) {
    console.log(keys);
}
// => Its giving the full array so its correct way to do it

for (const [keys, value] of map){
    console.log(`${keys} :- ${value}`);
}

const myObject = {//myObject is not iterable for forof loop
    username: "Aditya",
    password: "raj"
}

// for (const i of myObject) {
//     console.log(i);
// }

// for (const [keys, value] of myObject) {
//     console.log(`${keys} :- ${value}`);
// }