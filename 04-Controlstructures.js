// Comtrol Strutures 
// Sequence(top-downwards), conditional statements and loops/iterators


// sequence
console.log("one");
console.log("two");
console.log("three");
// conditional -- if else ,, switch
// 7 - teachers , above 12
const career = "teacher"
const numberOfYearsSaved = 2

if(numberOfYearsSaved > 12 && career=="teacher"){
    console.log("You qualify for 7% interest rates");
    // other lines of code
}else if(numberOfYearsSaved > 12 && career==="police"){
    console.log("You qualify for 6% interest rates ");  
}else {
    console.log("You qualify for 4% interest rates ");  
}


const mark = 67 // student scored D


// loops/iterators -- for loop, while loop , do-whole loop

// for(initial value, condition, incrementor/)

for(let count =23; count > 5 ; count--){
    console.log(count);
    console.log("running code in this loop/block");       
}

// Write a function that logs even numbers between a givem range(20,30)

function logEvenNumbersInRange(start, end){
    for(let count = start; count <=end; count++){
        // step by step
        if(count%2 == 0){
            console.log(count + " is even.");
        }
    }
}
logEvenNumbersInRange(20,30) // 20, 22, 24, 26,28,30
logEvenNumbersInRange(7,15) // 8,10,12,14,16


let currentSpeed = 30

while(currentSpeed >= 1){
    console.log("Car is moving");
    console.log(currentSpeed);
    currentSpeed--    
}

console.log( "Car stopped at speed " + currentSpeed);