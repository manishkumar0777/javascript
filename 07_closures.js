function makeFunctionArray () {
    const arr = [];

    for(var i = 0; i<5; i++){
        arr.push(function(){ console.log(i)})
    }

    return arr;
}

const funcArray = makeFunctionArray();

funcArray[0](); // the output we get is 5 not expected as 0

// creating an example to get this better

function makeHelloFunction(){
    const message = 'Hello!';

    function sayHello(){
        console.log(message);
    }

    return sayHello;
}

const sayHello = makeHelloFunction();

 // console.log(message); //this will give errror as it is not defined

sayHello();
