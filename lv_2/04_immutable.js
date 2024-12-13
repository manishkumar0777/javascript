//Const***************************************************************************************************************************************

//const cannot be updated id you try you will ge errror

const c = 40;

// c = 41;
// c++;
// c--;
//above all expreesion give the error and it is declared as const
console.log(c);

//Let***************************************************************************************************************************************

//Let is mutable
let a = 4;
console.log(a);

a = 5;
a++;
console.log(a);

//but let will give you error here
// let a = 4; 


//var***************************************************************************************************************************************

//but var has these all options

var v = 4;
console.log(v); //4

v = 9; 
v++;

console.log(v); //10

var v = 'newVar'; // this will override the previous one  this is caled shadowing 
console.log(v); // newVar