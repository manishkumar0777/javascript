// there are three different way to rpresent the object 

//first way to do that

const o = new Object();
o.firstName = "Manish";
o.lastName = "Kumar";
o.isCoding = true;
o.greet =  function(){
    console.log("Hi !...");
}



// second way to declare the  object
const o2 = {};
o2.firstName = "Manish";
o2['lastName'] = "Kumar";
o2.key = 'isCoding';
key = true;
o2['greet'] = function (){
    console.log("hi ! ...");
}


//third way to declare an Object 

const o3 = {
    firstName : 'Manish',
    lastName : 'Kumar',
    isCoding : true,
    greet : function(){
        console.log("Hi ! ...");
    }
}

console.log(o.firstName);
console.log(o2.greet);
console.log(o3.isCoding);