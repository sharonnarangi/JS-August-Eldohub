//  Question 1
//Write a function mergeArrays(arr1, arr2) that
// takes two arrays arr1 and arr2 and merges them
// into a single array, with the elements sorted in ascending order.

//Scenario
//You are building a music playlist app. You have two playlists from different sources
//Write a function to merge these playlists into one
//that the songs are sorted alphabetically by their titles.

//SOLUTION 
function mergeArrays(gospelSongs,reggaeSongs) {
    let combinedArray = gospelSongs.concat(reggaeSongs);
    
    let sortedArray = combinedArray.sort();
    
    return sortedArray;
}
let gospelSongs = [' Yesu ni Bwana',' Shusha Nyavu'];
let reggaeSongs = ['Wah gwaan','Jah is alive'];
let sortedPlaylist = mergeArrays(gospelSongs, reggaeSongs);

console.log(sortedPlaylist)


//Question 2
//Write a function removeDuplicates(nums)
//that takes an array of numbers nums and removes any duplicate
// numbers, returning a new array without duplicates.

//Senario
//You are developing a survey application where users 
//can select multiple options. Write a function to remove duplicate
//selections from the user's responses to ensure accurate data analysis.


//SOLUTION
function removeDuplicates(nums) {

    let uniqueSet = new Set(nums);
    
    let uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);


//Question 3
//Write a function capitalizeWords(sentence) that takes a sentence
//sentence and capitalizes the first letter of each word in the sentence.

//Scenario
//You are developing a blog platform where users can submit articles. 
//Write a function to automatically capitalize the titles of submitted 
//articles for consistent formatting and readability.


//SOLUTION
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return capitalizedWords.join(' ');
}
let sentence = "hello world";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);

//Question 4
