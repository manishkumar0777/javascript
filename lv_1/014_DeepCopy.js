
const o = {
    a : 'a',
    b : 'b',

    obj : { 
        key : 'key',
    },
}


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

const o2 = deepCopy(o);

o.obj.key = 'newKeys'; // this will only be updated in o5

console.log(o2.obj.key); // output : key