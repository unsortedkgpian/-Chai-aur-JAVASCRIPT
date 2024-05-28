// const promiseOne = new Promise((resolve, reject)=>{
//     setInterval(() => {
//         console.log("Ho HI are you doing");
//         resolve();
//     }, 2000)
// })

const fetch = require('node-fetch');

// promiseOne.then(() => {
//     console.log("Task is completed");
// })

// new Promise((resolve, reject) => {
//     setInterval(()=>{
//         console.log("Lets race");
//         resolve();
//     }, 3000)
// }).then(()=>{
//     console.log("done");
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Set ht up");
//         resolve({username:"Aditya", email:"the@gmail.com"});
//     }, 1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             resolve({username:"raj", password:"12345"})
//         } else {
//             reject('error: Something is wrong with it')
//         }
//     }, 1000)
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const pit = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(promiseThree);


// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((name)=>{
//     console.log(name);
// }).catch(()=>{
//     console.log("someting is missing");
// }).finally(()=>{
//     console.log("Somiting is done");
// })


// console.log(promiseThree);


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username:"javaScript", password:"nhibatuga"});
//         } else {
//             reject('error: JavaScript is wrong with it');
//         }
//     })
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
        
//     }
// }

// consumePromiseFive()

// async function getAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode/user');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data)=>{console.log(data);})
.catch(()=>{error})

