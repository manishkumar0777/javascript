// - this referes to the current context 
// const user = {
//     userName : "Manish",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.userName}, welcome to website`);
        
//     }
// }

// user.welcomeMessage()
// console.log(this);

//- this works well in objects
function one (){
    let userName = "Manish"
    console.log(this); // different types of method - many
    console.log(this.userName); // undefined   
}
// one()

//- in arrow function
const two = () => {
    let userName = 'Hello'
    console.log(this); // empty - {}
    console.log(this.userName); // undefined   
}
// two()

//if you use curly braces then return keyword will be used other wise not necessatry
//arrow function
const addTwo = (num1 , num2) => {
    return num1+num2;
};
console.log(addTwo(2,3));

//implicit retunr arrow function
const add = (n1 , n2) => n1 + n2;

console.log(add(4,5));

//to return the object you need to use the paranthesis
const ob = () =>({userName : "Manish"});
console.log(ob());

let arr = [4,3,2,8,9,1,5];
console.log(arr)
arr.sort((a,b) => a-b);
console.log(arr);





