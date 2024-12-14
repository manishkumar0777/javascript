// this Higher Order function is used to perform a operation on each calue of an array if arry is mapped

const arr = [0, 1, 2, 3];

const addOne = (function (number) {return number+1});

console.log(arr.map(addOne)); // Output : [1, 2, 3, 4]