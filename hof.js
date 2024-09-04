//higher Order Functions--take other functions as arguments, they can also return function
function calculate(num, num2){
    //Input Validation
    console.log(num*,num2);
    return num*num2
}
//expect that the argument of type number
//arg--number, string, array, object

function one(str){
    console.log("code in f one:" + str);
}


function two(email,finarg){
    finarg(email)

}//this is a higher order function
//It takes in two arguments, the email and finarg which is our callback function
//it calls the callback function with the email as an argument
//A callback function is a function passed into another function as an argument
////CHECK JAVASCRIPT VISUALIZER ON GOOGLE
//callback function is a function that is passed as an argument to another function

two(sharonnarangi@gmail.com,one)//calling two , with 2 args- A string and a function
//Array methods are HOFs themselves--forEach,filter, map, sort

const numbers = [32,43,10,50,8,19]
numbers.forEach(function multiplybytwo(number){
    console.log(number*2)
})

//multiplyByTwo(32)
//multiplyByTwo(43)
//multiplyByTwo(10)


//A function that returns a function
function Supercool(){
    console.log("does some cool stuff");
    let operate = 600*800
    return function boringThings(){
        console.log("Doing some boring things");
        return 'boring'
    }
}
let results = superCool()
results()
//console.log(results())//this will return an error because results is a function and we are trying
//to call it like a function
supercall()()

let newresult = numbers.find(num=>num>10)
//This is  a function
console.log(newresult());
