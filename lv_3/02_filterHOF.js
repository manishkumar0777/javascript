//this higher order function is used to get array filterd according to the function

const x = [0,1,2,3];

const isGreaterthanOne = (function(number){return number>1});

console.log(x.filter(isGreaterthanOne)); // output : [2,3]