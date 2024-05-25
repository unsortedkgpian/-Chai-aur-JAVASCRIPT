// const tiderUsername = new Object ();// Sigleton object
const tiderUsername = {};// Non-Sigleton Object

tiderUsername.id = "123abc";
tiderUsername.email = "theadityakumar2810@gmail.com";
tiderUsername.isLoggedIn = false;
const mySym =  Symbol("123adv");
tiderUsername[mySym]= "123adv";

// console.log(tiderUsername); 

const regularUser = {
    email: "someone@anyone.com",
    fullname:{
        userfullname:{
            fistname:"Aditya",
            lastname:"Kumar",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname?.lastname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

// const obj4 = {obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2, obj3); // It return the first value of the object in which all other is insered

// Spread operator
const obj5 = {...obj1, ...obj2, ...obj3, ...obj4}

console.log(obj4);
console.log(obj5);

const user = [
        {
            id:1,
            email:"1@g.com"
        },
        {
            id:1,
            email:"1@g.com"
        },
        {
            id:1,
            email:"1@g.com"
        },
        {
            id:1,
            email:"1@g.com"
        },
    ]

console.log(user[1].email);

console.log(tiderUsername);
console.log(Object.keys(tiderUsername));
console.log(Object.values(tiderUsername));
console.log(Object.entries(tiderUsername));

console.log(tiderUsername.hasOwnProperty('isLogged'));

const course = {
    courseName: " Js in hindi",
    price: "999",
    courseInstructor:"Aditya"
}

const {courseInstructor: cI} = course;// destructing

// console.log(courseInstructor);
console.log(cI);

// API

// {
//     songName: "raja",
//     songduration: 3,
//     peek:3

// }


[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

]