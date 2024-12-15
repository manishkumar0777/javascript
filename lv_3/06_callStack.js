function addOne(num){
    return num+1;
}

function getNum(){
    return addOne(10);
}

function c(){
    console.log(getNum() + getNum());
}

c();

//javascript keeps the track of the stack of the function
// as in this program first 
// c() -> getNum() -> addOne()