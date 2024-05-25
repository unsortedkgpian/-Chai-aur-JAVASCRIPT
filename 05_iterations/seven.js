const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map( (nums) => nums + 10 );
newNums = myNumbers.map( (nums) => {
    return nums + 10 ;
});


// chaining of map and filters

newNums =myNumbers
    .map((nums) => nums * 10)
    .map((nums) => nums - 1)
    .filter((nums) => nums % 3 === 0)

console.log(newNums);