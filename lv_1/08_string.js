const name = "Manish-kumar"
const repoCount = 30

console.log(name + repoCount); //outdated

console.log(`Hello I am ${name} and my repocount is ${repoCount}`);//we can easily use method in this way of adding strings

const gameName = new String('manish')
console.log(gameName);

//a string has many mehthods check at mdn

console.log(gameName[3]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));
console.log(gameName.__proto__);
console.log(gameName.length);

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-3,6) //this cn have negative value
console.log(anotherString); 

const newStringOne = "   aman  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube%20.com"
console.log(url.replace('%20','_'));

console.log(url.includes('com'));

console.log(gameName.split('_'));


