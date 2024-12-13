console.log(2 > 1); //this type of statement give the boolean value


// avoid these conversion below ****************************************************

console.log("2" > 1); //this will automatically convert 2 in number


console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/* the reason is that an equally check == and 
comparision >,<,>=,<= work differently.
comparision convert null to a number , treating it as 0.
thats why (null >= 0) is true and (null > 0) is false.*/ 

console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);

// === check not only data it also check the datatypes 

console.log("2" === 2);