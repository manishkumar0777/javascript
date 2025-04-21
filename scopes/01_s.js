// let a = 10;
// const b = 20;
// var c = 30;

//scope - {}

//global scope - accesibel through our whole code


//block scope - only accesibel with in the block
if (true) {
    let a = 10;
    const b = 20;
    var c = 30; // this is the reason for var to be avoided
}

// console.log(a); // will give the error that a is not defined
// console.log(b); // same error that b is not defined
console.log(c); // this will not give the error - o/p = 30
