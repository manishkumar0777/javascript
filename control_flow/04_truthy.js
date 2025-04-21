// falsy values - 
// false, 0, -0 , BigInt 0n , "" , null , undefined , NaN


//truthy values - 
// true , "0" , "false" , " " , [], {} , function (){},

//CHEKING ARRAY FOR THE EMPTY OR NOT 
// const arr = [];
// if(arr.length === 0){
//     console.log("arr is empty");
// }

// // CHECKING FOR OBJECT IS EMPTY OR NOT 
// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// - Nullish coalescing operator ?? : null undefined

let val1;
let val2
val1 = 5 ?? 10; //  - 5
val2 = null ?? 10; // - 10
console.log(val1 , val2);

// ternary operator - condition ? statement : statement;

const icePrice = 100;

icePrice <= 80 ? console.log("less than 80") : console.log("More than 80");

