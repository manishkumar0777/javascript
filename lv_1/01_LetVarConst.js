const accountId = 144553
let accountEmail = "manish@34gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" 


let accountState; //if only variable is decalared the it assing undefined value

// accountId = 12 //THIS OPERATION NOT ALLOWED

accountEmail = "man@gmail.com"
accountPassword = "12321"
accountCity = "Banglore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);

/*
prefer not to use var 
because of issue in block scope
and fucntional scope
 */