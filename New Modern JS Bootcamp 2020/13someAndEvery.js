const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// This returns a boolean. 
// Check if all elements have a length of 3
const all3Length = words.every(word => word.length ===3);

// Checking if all elements end in 'g'.
const allEndInG = words.every(word => word[word.length -1] === 'g');

// SOME checks and returns TRUE if any of the elements tests true to the condition
const anyHasAnO = words.some(word => word.includes('o')); // True

const everyHasAnO = words.every(word => word.includes('o')); // False