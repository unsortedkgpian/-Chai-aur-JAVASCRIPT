// Dates

let myDates =  new Date();

console.log(typeof Date); // function
console.log(typeof myDates);// Object

console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toLocaleString());
console.log(myDates.toDateString());
console.log(myDates.toJSON());// same as mydates
console.log(myDates.toISOString());

// let myCreatedDate = new Date(2024, 4, 23);
let myCreatedDate = new Date ( "2023-01-24")
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

// **********************  Time     +++++++++++++++++++++++++++++++

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);   
console.log(newDate.getDay());



newDate.toLocaleString('default', {
    month:"long",
    hour:"2-digit",
    minute:"2-digit",
    weekday:"long"
})

