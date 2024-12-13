//MEMORY -----------------------

/* Stack (primitive), Heap(Non-primitive) */



//stack is used-------------

let myYoutubeName = "Manish"
console.log(myYoutubeName); //pritive datatypes gives the copy of variable from memory


//heap is used----------

let user = {
    name: "manish",
    upi: "@ybl"
}

console.log(user); //non primitive datatypes gives reference

anotherUser = user

anotherUser.name = "praveen"
anotherUser.upi = "@paytm"

console.log(anotherUser);
console.log(user); // this also get updated as reference is given in non-primitive datatypes