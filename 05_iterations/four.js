const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key}        shortcut for the       ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]


// Object and array are same but keys is different in both of them
// In Object we can name our key but in array it is fixed
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}



const map = new Map();

map.set('IN', "India");
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('IN', "Indian");

// It will show no error in the formate
for (const [key, value] in map) {
    console.log(key);
    console.log(value);
}