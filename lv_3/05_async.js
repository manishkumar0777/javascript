function printOne(){
    console.log("1");
}

function printTwo(){
    console.log("2");
}

function printThree(){
    console.log("3");
}

//Normal Output  : 1 2 3
printOne();
printTwo();
printThree();



//async output : 3 2 1

setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree(); 