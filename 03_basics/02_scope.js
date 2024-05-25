let a = 200;// Global variable 
// both in node and console is different
const b = 300;
// var c = 400;

if (true) {// block variable
    let a = 2;
    console.log("INNER : " + a);
    const b = 3;
    // var c = 4;
}

console.log(a);
console.log(b);
// console.log(c);



function one(){
    const username = "Aditya"
    
    function two(){
        const website = "ktj.cm"
        console.log(username);
    }
    // console.log(website); out of the scope 
    two();
}

one();

if (true) {
    const pg = "fan";

    if (true) {
        const gp = "raj"
        console.log(pg);
    }
    // console.log(gp);
}

// console.log(pg);
console.log(addOne(3));
function addOne (num) {
    return num + 1
}

addOne(1);



// console.log(addTwo(3));

const addTwo = function (num){// expression 
    // variable is so powerfull it can hold any thing fucntion object anything
    // If we store it into varibale we cannot use is before 
    return num +2;
}

addTwo(20);