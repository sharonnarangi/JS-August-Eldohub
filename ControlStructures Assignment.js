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

console.log( "Car stopped at speed " + currentSpeed)