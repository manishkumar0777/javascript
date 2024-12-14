const sayHello = (function(){
    var message = 'hello';

    function sayHello() {
        console.log(message);
    }

    return sayHello;
})() // immediately invoked function expression (IIFE)

sayHello(); //Output : hello
