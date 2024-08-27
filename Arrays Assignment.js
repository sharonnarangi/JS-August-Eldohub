//Array Methods -- 5 examples - code
// String Methods -- 5 examples - code

//Answers
//1. Array Methods -- 5 examples - code

const items = [
    { name: 'Bike',      price: 100   },
    { name: 'TV',        price: 200   },
    { name: 'album',     price: 10    },
    { name: 'book',      price: 5     },
    { name: 'phone',     price: 500   },
    { name:'computer',  price: 1000   },
    { name: 'keyboard', price: 25     },
      
]
//1.1Filter Method
const filteredItems = items.filter(item =>{ return item.price > 100});
//All items less than $100 will be in the new filtered array
console.log (filteredItems)
console.log(items)//It doesn't cancel other arrays

//1.2Map Method
const itemNames = items.map(item =>{ return item.name});
console.log(itemNames)//If we want prices instead of names, all we do is change from name to itemPrices
//We can use find to find the name of the item we want from the list.

//1.3ForEach Method
//This one does not need a return statement.Check below how it looks
 items.forEach (item =>{ console.log(item.name)})

 //1.4 Some
 //This one returns true if at least one item in the array meets the condition
 const hasExpensiveItem = items.some(item => item.price > 100);
 console.log(hasExpensiveItem)
 //1.5 Every
 //This one returns true if all items in the array meet the condition
 const allExpensiveItems = items.every(item => item.price > 100);
 console.log(allExpensiveItems)







