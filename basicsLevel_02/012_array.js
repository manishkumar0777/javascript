

const myfriend = ["Praveen", "Raunak"]
console.log(myfriend);

const myNewArr = new Array(1,2,3,4,5,6)

const myArr = [0, 1, 2, 3, 4]
console.log(myArr); 

/* Array methods ------------------------- */

//add element at last --

myArr.push(5) 
console.log(myArr);



//delete the last element in the array--

myArr.pop() 
console.log(myArr);



//add and delete elements at first --

myArr.unshift(9) //this method many complication in code because it changes index of all the elements
console.log(myArr);

myArr.shift()
console.log(myArr);



//checks availability--

console.log(myArr.includes(4));
console.log(myArr.includes(9));



//finding index of elements in the array

console.log(myArr.indexOf(3));
console.log(myArr.indexOf(7)); //this gives -1 because element not available 



const newarr = myArr.join()
console.log(newarr);
console.log(typeof(newarr)); //get converted into string type by using join method 



//slice and splice ------

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr); 


const myn2 = myArr.splice(1,3)  //this method extract the range from an array 
console.log("C ", myArr); 
console.log(myn2);












