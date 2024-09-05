const countEl = document.getElementById('count')
const plusBtnEl = document.getElementById('plus')
const minusBtnEl = document.getElementById('minus')

let count = parseInt(countEl.textContent)
    

    plusBtnEl.addEventListener('click',()=>{
        count = count + 1
        countEl.textContent = count

    }
)

minusBtnEl.addEventListener('click',()=>{
    count = count - 1
    countEl.textContent = count

}
)

