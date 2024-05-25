const myNums = [1, 2, 3];

let myTotal = myNums.reduce(function (acc , curraval) {
    console.log(`acc:${acc} curraval:${curraval}`);
    return acc + curraval;
}, 45);

myTotal = myNums.reduce((acc, curraval) => acc + curraval , 10)

console.log(myTotal);

const shopingCart  = [
    {
        iteamName:"js course",
        price: 2999
    },
    {
        iteamName:"py course",
        price: 999
    },
    {
        iteamName:"mobile dev course",
        price: 4999
    },
    {
        iteamName:"data science course",
        price: 9999
    },
]

let totalCost = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalCost);