// dates

// let myDate = new Date()
// console.log(myDate); //give current date
// console.log(myDate.toString()); //give current date in string
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// 
// 
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-02-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); //give time in milisecond

console.log(Math.floor(Date.now()/1000)); //this exludes decimal value and give time in seconds


let newDate = new Date()
console.log(newDate.toString());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekDay:"long",
})
