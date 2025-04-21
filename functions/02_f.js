// - adding the price in the cart
// - ... is called both rest/spread operator on the basis of thier usecases

//using ... rest operator
function calculateCart(...num1) {
    let res = 0;
    num1.map(item => (res = res + item));
    return res;
};

console.log(calculateCart(200 , 300 , 400)); //  we will get the array of these numbers

//handling the objects 
const user = {
    userName : "manish",
    age : 20
}

function handlingObject(anyObject) {
    console.log(`Name : ${anyObject.userName}, age : ${anyObject.age}`)
}

handlingObject(user);

//handling array

const myNewArray = [10, 20, 30, 40];

function getSecondValue(getArray) {
    return getArray[1]
}

const result = getSecondValue(myNewArray);
console.log(result);
