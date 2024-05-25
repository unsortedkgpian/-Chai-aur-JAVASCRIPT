const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${username} , welcome to home`);
        console.log(`${this.username} , welcome to home`);
        // this refer to current context
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "raj";
user.welcomeMessage();


console.log( this);// => {} empty object
console.log(typeof this);

// but is console it will give Window as an output

// function chai(){
//     let username = "Aditya";
//     // console.log(this);// many thing 
//     console.log(this.username);// we can only use in object not 
// }

// chai();


// const chai = function{
//     let username = "Aditya";
//     // console.log(this);// many thing 
//     console.log(this.username);// we can only use in object not 
// }

// chai();

const chai = () =>{
    let username = "Aditya";
    console.log(this);// in case of arrow funtion it return an an empthy object
}

chai();

const addsomething = (num1, num2) => {
    return num1+ num2;// explicet return
}

const addsomething1 = (num1, num2) => num1 + num2;

const addsomething2 = (num1, num2) => (
    num1 + num2
)
console.log(addsomething(3, 8));
console.log(addsomething2(2,3));










