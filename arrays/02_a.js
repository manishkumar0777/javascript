const marvel_Heroes = ['IronMan', 'Thor'];
const dc_Heroes = ['Batman', 'Superman'];

// marvel_Heroes.push(dc_Heroes); // this will push whole array in the array
// console.log(marvel_Heroes);


//concat- this method retunr a new array it dont manipulate or add anything to the existing array
// const allHeroes = marvel_Heroes.concat(dc_Heroes);
// console.log(allHeroes);

//Spread Operator - ... // this spread the array each elemetn
// const allHeroes = [...marvel_Heroes, ...dc_Heroes];
// console.log(allHeroes);

//flat - use to concatnate the the array of different level 
// const an_arr = [1,2, [2,3,4], 4, [2,4,[4,5,7], 5,6], 9 ];
// const new_flat_arry = an_arr.flat(3);
// console.log(new_flat_arry);

//Array - isArray - to check the param is array or not
//Array - from - to make anything array

// console.log(Array.isArray("Manish"));
// console.log(Array.from("Manish"));
// console.log(Array.from({name : "Manish"})); // this will give empty array apeacial case


//Array - of - this will make multiple elements array
let a = 1
let b = 2
let c = 4

console.log(Array.of(a,b,c));

