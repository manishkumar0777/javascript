function one () {
    const userName = "praveen"; // this will be accesible in full block of this
    
    function two () {
        const website = "youtube"; // this will not be able to accesible out of this block
        console.log(userName);
    }
    // console.log(website); // this give error bcz - accessing it outside the block
    
    two();
}

one();

// ++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // this will run and give the result

function addOne (value) {
    return value+1;
}
addOne(5);


//this is called expression in javascript - a variable can hold the function
// console.log(addTwo(5)); // this will give the error - not accesible before decalration
const addTwo = function(num){
    return num+2;
}
addTwo(5)