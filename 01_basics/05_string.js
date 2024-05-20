const name = "Aditya"
const repoCount = 50;

// console.log(name + repoCount + " value");// old way prefer to not use

console.log(`My name is ${name} and my repocount is ${repoCount}  `);  

// const gameName = new String('Aditya');
let gameName = new String('Aditya');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

gameName = "Aditya-Ac"

const newStr = gameName.substring( 0, 6);// last is not included
console.log(newStr);

const anotherString = gameName.slice(-8, 3);
console.log(anotherString)

const newStr1 = "     Aditya     KUmar";
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://www.aditya.com/rupesh%20raj"
console.log(url);
console.log(url.replace('%20',  '-'));
console.log(url.includes('ditya'));