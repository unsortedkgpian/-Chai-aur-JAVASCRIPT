const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach()// we have to give callback function

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((val) => {
    console.log(val);
})

function printMe (Item){
    console.log("Hi How are you" + Item);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myArrObj = [
    {
        language:"javascript",
        id:"js"
    },
    {
        language:"competative",
        id:"cpp"
    },
    {
        language:"python",
        id:"py"
    },
    {
        language:"Html",
        id:"Hyper"
    },
    
]

myArrObj.forEach((item)=>{
    console.log(item.language);
})