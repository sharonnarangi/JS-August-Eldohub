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