
//for - loop

// for(let i = 0; i<5; i++){
//     console.log(i);
// }

for(let i = 1; i<=10; i++){
    // console.log(`Outer Loop ${i}`);
    
    for(let j = 1; j<=10; j++){
        // console.log(`${i} X ${j} = ${i*j}`);
    }
}

//loop in the array
let myArray = ["Flash" , "superMan" , "Batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//break and Continue

for(let i = 1; i<=20; i++) {
    if(i === 5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i : ${i}`)
}

for(let i = 1; i<=20; i++) {
    if(i === 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i : ${i}`)
}