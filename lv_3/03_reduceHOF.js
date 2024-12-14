// this higher order function is used to reduce the array in the single value accoeding to the functin provided 

const x = [0,1,2,3];

const add = (function(num1,num2){return num1+num2});

console.log(x.reduce(add)); // Output : 6