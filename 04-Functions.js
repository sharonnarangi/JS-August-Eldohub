// A function is a re-usable block of code 


// Definining a function
function shoutName(name, age){
    console.log("Helloooo "+ name + " you are " + age);
    console.log("Helloooo "+ name + " you are " + age);
}
shoutName("Alice", 90) // invoking/calling the function
shoutName("Beda", 70)
shoutName("Stephen", 60)
shoutName("Sharon", 80)

// avoid/reduce redundancy/repetition


// Sometimes a function has a return value -- the resulting value/data after the function has completed its task

function calculateAverage(num1, num2,num3){
const res = (num1+num2+num3)/3
return res
}

const mathAverage = calculateAverage(43,35,64)
console.log(mathAverage);

/// Arrow functions -- a new syntax/way of defining function(2015)

const calculateAge = (yob)=>{
    const age = 2024 - yob 
    console.log("You are "+ age);
}

calculateAge(1999)
calculateAge(2010)
calculateAge(1910)


function sendEmail(email, message){
    // use network
    // format the text
    // use SMPT 
}

sendEmail("eustud@gmil.com", "Submit Assingmet")

sendEmail("stphen@gmil.com", "Submit Project")