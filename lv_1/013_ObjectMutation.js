// Object is mutable in js

const o = {
    a : 'a',
    b : 'b',
}
o.a = 'newValue'; // changing the value of a in o
console.log(o.a); // a = newValue





const o2 = o; // referencing the same object but by different name
o.b = 'new in o'; // changing the value of b in o

console.log(o2.b); // b= new in o

//the value got changed in o2 because there is no seperate o2 is created its just pointing the reference of o


// if you wnat to copy or assign the object to another object so that the above scenerio doesnt happpen
const o3 = Object.assign({}, o); // Now all the variabls and data are copied to the o3  this is called shallow copy







//now if a object is present inside the object

const o5 = {
    a : 'a',
    b : 'b',

    obj : { 
        key : 'key',
    },
}

// shallow copy *****************************************
const o6 = Object.assign({}, o5); //it does ake the copy of variable and create a obj reference 

// o6.obj.key = 'new'; // it will change the value of key in o5 and o6 both

console.log(o5.obj.key); // Output : new



//deepcopy************************************************
//creating own deepcopy function rather than using the librery

function deepCopy (Obj) {

    //check if values are Objects
    // if so.  then copy that Object (deepcopy)

    const keys = Object.keys(Obj);
    const newObject = {};

    for(let i = 0; i<keys.length; i++){
        const key = keys[i];
        if(typeof Obj[keys[i]] === 'object') {
            newObject [key] = deepCopy(Obj[key]); 
        } else {
            newObject [key] = Obj[key];
        }
    }
    //if there is  no Object Present in the Object then do shallow copy 
    return newObject;
}

const o7 = deepCopy(o5);

o5.obj.key = 'newKeys'; // this will only be updated in o5

console.log(o7.obj.key); // output : key