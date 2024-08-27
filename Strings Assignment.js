//1.1charAt()
//This method helps you find a letter in a word by saying which spot (or index) you want to look at.
//The index starts at 0, so the first letter is at index 0, the second
//letter is at index 1, and so on.
console.log("Hello".charAt(0)); // Outputs: H
let word = "hello";
console.log(word.charAt(1)); // "e"
//Imagine you have a row of letters: "h", "e", "l", "l", "o".
//If you want the letter at spot number 1 (starting from 0), you get "e".

//1.2toUpperCase
//This method helps you change a letter to uppercase.
// This method changes all the letters in a word to big letters (capital letters).
console.log("hello".toUpperCase()); // Outputs: HELLO
// If you have the word "hello" and you use this method, it turns all the letters into "HELLO".

//1.3indexOf
//This method helps you find the index of a letter in a word.
//The index starts at 0, so the first letter is at index 0, the second
//letter is at index 1, and so on.
console.log("hello".indexOf("l")); // Outputs: 2
//If you have the word "hello" and you use this method, it tells you that the
//letter "l" is at index 2.

//1.4slice
//This method helps you get a part of a word.
//You can use it to get a part of a word, or to get the whole word.
let word = "hello";
console.log(word.slice(1, 4)); // "ell"
//If you want to cut out "ell" from "hello", you start at spot 1 and stop before spot 4. So you get "ell".

//1.5replace
//This method changes one part of your word into something else
let word = "hello";
console.log(word.replace("e", "a")); // "hallo"
//If you have the word "hello" and you use this method, it changes the "e
//into an "a". So you get "hallo".
// If you have "hello" and you want to change the "e" to an "a", you get "hallo"









