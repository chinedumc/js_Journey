const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t) {
    return t.toUpperCase();
})
texts; //["rofl", "lol", "omg", "ttyl"]
caps; //["ROFL", "LOL", "OMG", "TTYL"]

// Another example
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const numDetail = numbers.map(function(n) {
    return{
        number: n,
        isEven: n % 2 === 0
    }
})

numDetail;

// Yet another example: Write a function using map to 
//get an array of each element in words as an abbreviation in upper case 
const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
})
