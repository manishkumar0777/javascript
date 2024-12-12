const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes) //it takes array as single element and print inside the array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);


 

// marvel_heroes.concat(dc_heroes) //this also does the same as push it doesnt join
// console.log(marvel_heroes);





//to join the array we need to create a new variable

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);



//spred operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


//flat method

const anotherArray = [1,2,3,4,[5,6,7],8,[6,7,[4,5]]]
console.log(anotherArray);

const real_another_Arr =anotherArray.flat(Infinity)
console.log(real_another_Arr);



//array conversion
console.log(Array.isArray("Jitesh"));

console.log(Array.from("Jitesh")); //convert string into an array

console.log(Array.from({name: "Jitesh"})); //Interesting case 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
















