// console.log("A");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("y");
// console.log("a");


function sayMyName(){
    console.log("A");
console.log("d");
console.log("i");
console.log("t");
console.log("y");
console.log("a");
}

// sayMyName => referece // ( )exceution

function addTwoNumber (number1, number2){// parameters
    console.log(number1 + number2);// => not returing any thing
}
function addTwoNumber (number1, number2){// parameters
    let result = number1 + number2;
    console.log("Aditya");
    return result;
    // console.log("Aditya");// unreachabel code
}

// addTwoNumber(3, 4);//arguments

const result = addTwoNumber(4,5);
console.log("Result: " + result);

function loginUserMessage(username = "sam"){//defaut value of the useranem is sam
    // if (username === undefined) {
    //     console.log(`Please enter a username`);
    //     return
    // }
    if (!username) {// user not log in
        console.log(`Please enter a username`);
        return
    }

    return `${username} is loged in`
}

console.log(loginUserMessage("Aditya"));



function calculateCartPrice (...num1){
    //... is called rest as well as spread operator 
    // it depends on the use case how it is used
    // here it is used as to converert extra values in array
    return num1;
}

console.log(calculateCartPrice(200, 3222, 338839));

const user = {
    username: "Aditya",
    price: 399
}

function handleObject(anyobject){
    return console.log(`Username is ${anyobject.username} and the price is ${anyobject.price} `);
}

console.log(handleObject(user));
console.log({
    username:"kumar",
    price: 3829
});


const myArr = [233, 433, 2223, 22];

function returnSecondvalue(getArr){
    return getArr[1];
}

console.log(returnSecondvalue(myArr));
console.log(returnSecondvalue([2,3,2,2]));