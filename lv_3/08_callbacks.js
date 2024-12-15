// Not asynchronous
function doSomething(callback){
    callback(1);
}

doSomething(console.log); // the Output is : 1

//Asynchrounous

function doSomethingAsync(callback){
    setTimeout(function (){callback(1) }, 1000);
}

doSomethingAsync(console.log); // will get the output 1 sec later 
