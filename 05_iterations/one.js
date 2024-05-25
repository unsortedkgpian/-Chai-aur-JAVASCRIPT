// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

console.log("Next");

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// console.log(element);
// console.log(index);

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop is ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop Value is ${j} and outer loop value is ${i}`);
        
//     }
    
// }
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop Value is ${j} and outer loop value is ${i}`);
        console.log(` ${i} * ${j} = ${i*j}`);    
    }
}

const myArr = ["Batman", "Superman", "Flash"];
console.log(`myArr length  is : ${myArr.length}`);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}


for (let i = 0; i <= 20; i++) {
    if (i ===5) {
        console.log('Detected 5');
        // break;
        continue;
    }
    console.log(`The Output is ${i}`);
}
