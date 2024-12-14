const counter = (function(){
    let count = 0;

    return {
        inc : function(){count = count + 1},
        get : function(){console.log(count)},
    }
}) () //IIfe

counter.get(); // 0
counter.inc(); // +1
counter.get(); // 1

// this function print the values 0 and 1 but doesnt have acces to the count variable
