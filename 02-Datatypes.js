// In js , data can be placed in two datatype categories

// Primitive/Simple data types --- String(text), Number(decimals included), Boolean, Null, Undefined

// Non-Primitive/Complex data types - Objects, Arrays,Function

// Strings -- characters enclosed in quotes , "" or  ''
const username = "Albert Kipchirchir";
const email = "albert@eldohub.cdhsdh$%^$^o.ke";
const color = "#7482bb";

// Numbers
const age = 89
const year = 2005
const average = 95.23

// Boolean -- has two values - true and false
const isBrown = true
const darkMode = false

// Null - a place holder value, when you do not want to put an actual value

let averageScore = null
averageScore = 54

// Undefined - default value when no value is provided/assigned
let totalScore

// WE CAN USE THE typeof OPERATOR to check data types
console.log( typeof age ); // number
console.log( typeof totalScore );
console.log( typeof darkMode ); // boolean
console.log(typeof color);



// Objects -- data is stored like a real world object-- which have properties and methods/functions/actions e.g. car - color, yom, tospeed,country, brand, autoDrive, start, stopping, autocruise,
// Object literals {} are used to indicate that the data being stored is an object.
// An object has key:value pairs
const myCar = {
    color: "red",
    yom: 2022,
    brand: "Toyota Hilux",
    topSpeed: 300,
    isManual: false,
    start: function starting(){
        console.log("Car starting")        
    }
}

console.log(typeof myCar); // all the car details {}

console.log(darkMode) 
console.log( year );
// to get thw yom for myCar using dot notation
console.log( myCar.yom ); // 2022
console.log( myCar.topSpeed ); //



// Array -- a indexed collection/list of data
// An array is a special object that has no keys , instead , it has default indexes starting from zero
// we use [] todefine an array

const colors = ["red","yellow", "brown"]
const myInfo = ["albert", 800, true, ["kevin", "john"], {age: 50} ]
// colors[3] -- undefined

// console.log(myInfo);
// js automatically assigns indexes to elements of the array starting with index number 0
// elements of an array are separated by commas

console.log( myInfo[4] ); // the first element of the myInfo array

// function --- a block/collection of re-usable code

// DEFINING A FUNCTION
function formatMoney(){

    console.log("Changing the currency");
    console.log("done!!!")  

}
// to access/use code stored in a function, we call/invoke the function
formatMoney()
formatMoney()
formatMoney()
formatMoney()