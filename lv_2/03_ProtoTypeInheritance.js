 // 42.toString(); gives the error

const x = 42; 
console.log(x.toString()); // "42"
console.log(typeof x); // number

console.log(x.__proto__); //[Number : 0]
console.log(x instanceof Number); //false

//changing the prototyp is extremely dangerous becalue it effect whole program before and after too

