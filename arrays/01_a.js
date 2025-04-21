const arr = [1, 2 , 3, 4] //0-indexed;
const myHeroes = ['string' , 'string'];

const myArr = new Array(1 , 2, 3, 4); //new way to decaare the array



//push method is used to add the element to the array
// myArr.push(5); //add the element at the last of the array
// myArr.pop(); //delete the last element of the array

//shift-unshift
// myArr.unshift(9); //inserted at the start of the array
// myArr.shift(); //delete the first element of the array

//includes method - the array contains the passed element in the array or not 
// console.log(myArr.includes(4));

//indexoF method - used to get the index of the element
// console.log(myArr.indexOf(4));

//join method - used to join the arrray element and make it string
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice - get the array of the provided range dont include the range element
//splice - it just toatlly manipulate the original array and get the element of the provided range and all the element not available in the array are the only element that remained in the array

console.log("A ", myArr);

const my1 = myArr.slice(0,3);
console.log(my1);

const my2 = myArr.splice(0,4);
console.log(my2);

console.log("B " , myArr);