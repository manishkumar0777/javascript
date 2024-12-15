function recurse(){
    console.log('recursion!');
    return recurse();
}

recurse(); //it will stop when maximum call stack size will exceed
//Overflow