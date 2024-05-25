// if


const isLoggedIn = true;
const temperature = 41

if (temperature < 50){
    console.log("temperature less than 50");
}else{
    console.log("temperature is greater than 50");
}
console.log("executed");
// console.log("temperature is greater than 50");

// <
// >
// <=
// >=
// ==
// != 
// === value and datatype 
// !== not equal
// **** = is assign operator
// == comparision operator

const score = 200;
 
if (score  > 100) {
    // var power = "fly";
    var power = "fly";// dont flow the scope its a scope valiable you can use is anywhere
    console.log(`User power is ${power}`);
}

console.log(`User power is ${power}`);

// short hand notaition

const balance = 1000 
if (balance > 500) console.log(`${balance} is greater than 500`);
// implecit scope

// if (balance > 600) console.log(`${balance} is greater than 600`),
// console.log("but not infinity"); Not prefered

if (balance < 600) {
    console.log(`balance is lower than 600`);
} else if(balance < 900){
    console.log(`balance is lower than 900`);
}else {
    console.log(`balance is lower  than 1200`);
}


const loggedInGoogle = true;
const loggedInFromMail = true;

if(loggedInFromMail && loggedInFromMail && 2=='2'){// logical operator
    console.log('User is logged in');
}

if (loggedInFromMail || loggedInGoogle || 2==='2') {
    console.log(`User is logged in form one`);
}

