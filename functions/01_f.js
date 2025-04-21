// function name() {
//     console.log('Manish Kumar'); 
// }

//we get the reference like this
// console.log(name);

//calling functioin
// name();


//- this funciton return something
// function addTwoNum(num1 , num2) {
//     return num1 + num2;
// }

// const res = addTwoNum(2,4); //getting res in here
// console.log(res);

function isLoggedIn(userName) {
    if(userName) {
    return `${userName} just logged in`
    } else {
        console.log("User not logged in");  
    }
}

console.log(isLoggedIn()); // -- undefined
console.log(isLoggedIn("Manish")); // -- Manish


