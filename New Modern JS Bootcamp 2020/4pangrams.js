/*
 Write a function called isPangram, which checks to see 
 if a given sentence contains every letter of the alphabet. 
 Make sure you ignore string casing.
 */

 function isPangram(sentence) {
     let lowerCased = sentence.toLowerCase(); // Added  this last to take care of sentence cases
     for(let char of 'abcdefghijklmnopqrstuvwxyz') {
         if (lowerCased.indexOf(char) === -1) {
            return false;
         }
     }
     return true;
 }

// Using includes v2.0
function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase(); // Added  this last to take care of sentence cases
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
           return false;
        }
    }
    return true;
}
 