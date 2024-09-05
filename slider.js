const countEl = document.getElementById('count')
const plusBtnEl = document.getElementById('plus')
const minusBtnEl = document.getElementById('minus')

//function to turn these to an interger
//Initially it was telling us it is of type string, we used a function to make it a number
//DOM allows me to react to user interactions.// One of the reactions...clicking buttons
 //call back function
//arrow function

    //increment the count by 1
//update the text content of the count element
// parseFloat
    

    plusBtnEl.addEventListener('click',()=>{
        count = count + 1
        countEl.textContent = count

    }
)
