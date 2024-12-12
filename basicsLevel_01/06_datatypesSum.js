// PRIMITIVE DATATYPES -----
/* String, Number, Boolean, Null, Undefined, Symbol, Bigint*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bignumber =342423282n 

//REFERENCE (NON PRIMITIVE DATATYPES)
/* Array, Objects, Function */

const heroes = ["superman", "batman", "thor", "ironman"];

let myObj = {
    name: "Manish",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

//typeof Function - used to get the datatypes of variable
console.log(typeof(anotherId))
