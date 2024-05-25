// Singleton
// Object.create

// Object literls => how to decalre a object;


let mySym = Symbol("mykey1")

const jsUser = {
    name: "Aditya",
    "full name" : "Aditya Kumar",
    [mySym]:"mykey1",
    age:20,
    location:"Kharagpur",
    email:"theadityakumar2810@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser['full name']);
console.log(jsUser[mySym]);

jsUser.email = "theadityakumar2811@gmail.com"
// Object.freeze(jsUser);
console.log(jsUser["email"]);
jsUser.email="pg@gmail.com";// no error but freeze user
console.log(jsUser);

jsUser.greeting = function (){
    console.log(`The name of user is ${this["full name"]}`);
}

console.log(jsUser.greeting);// just the reference of the function
console.log(jsUser.greeting());