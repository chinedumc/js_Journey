const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const cap = texts.map(function(t) {
    return t.toUpperCase();
})
// Becomes
const caps = texts.map((t) => {
    return t.toUpperCase();
})


// Another example
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
numbers.forEach((num, idx) => {
    console.log (idx, num*2);
})

// Implicit Returns: Where if the expression is a one-liner, you 
//can leave off the return keyword, curly braces.
const square = n => {
    return n*n;
}

// Becomes:
const square1 = n => (
    n*n
)

// And better as:
const square2 = n => n*n; 

// Still becomes:
const caps2 = texts.map(t => t.toUpperCase()); //Implicit return

//Another example
const parityList = numbers.map(n => {
    if (n % 2 === 0) {
        return 'true';
    }
    return 'false';
})

//Becomes:
const parityList2 = numbers.map(n => (n % 2 === 0) ? 'true' : 'false') // Implicit return