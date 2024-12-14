console.log(a); // this will give the error because connst is block scope
// interpreter is reading down and not getting the variable a 

console.log(b); // same thing happens with the let


console.log(v); // this will not give the error Output : undefined

thisIsHoisted(); // this will work and will give the output

thisIsNotHoisted(); //this will give the errror


const a = 5;

let b = 6;

var v = 4;

function thisIsHoisted() {
   console.log("This is the Hoisting")
}

const thisIsNotHoisted = function() {
    console.log('this is not hoisted as declared as constant function')
}