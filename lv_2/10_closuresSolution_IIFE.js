function makeFunctionArray() {
    const arr = [];

    for (var i = 0; i < 5; i++) {
        arr.push((function(x) {
            return function () {console.log(x) }
        })(i))
    }
    return arr;
}

const functionArr = makeFunctionArray();
functionArr[0](); //now it will print 0 as expected