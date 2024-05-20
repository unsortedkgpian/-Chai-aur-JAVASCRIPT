// arrays

const myArray = [ 1, 2, 3, 4, 5, "aditya", false];
console.log(myArray);


const myArray1 = new Array(0,1,2,3,4);
console.log(myArray1);


// Array method

const myArr = new Array(0,1,2,3,4,5);
myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);

console.log(myArr.includes(9));
console.log(myArr.indexOf(8));
console.log(myArr);

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice , splice
// slice => just take a copie
// splice => manipulate the original array and include the point

console.log("A " , myArr);

const myNewArr = myArr.slice(1 , 3);
console.log("Slice",);
console.log("B " , myNewArr);
console.log(myArr);

const myNewArr2 = myArr.splice(1,3);
console.log("C", myNewArr2);
console.log(myArr);