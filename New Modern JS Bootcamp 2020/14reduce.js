const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((total, currentVal) => {
    return total*currentVal;
})

// Another example
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxgrades = grades.reduce((max, currVal) => {
    if(currVal > max) return currVal;
    return max;
});

// Written as:
const maxGrades2 = grades.reduce((max, currVal) => 
    Math.max(max, currVal)
)

// Another example:
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// We can get the count of 'y' and 'n'
const results = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1;
    }
    return tally;
}, {})

// Rewritten as:
const results2 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

// Another Example: 
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
 },
 {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
 },
 {
     title: 'American Gods',
     authors: ['Neil Gaiman'],
     rating: 4.11
 },
 {
     title: 'A Gentleman in Moscow',
     authors: ['Amor Towles'],
     rating: 4.36
 },
 {
     title: 'Changing My Mind',
     authors: ['Zadie Smith'],
     rating: 3.83
 },
 {
     title: 'Not a Good Book',
     authors: 'Xavier Time',
     rating: 2.35
 }
]

 // Get the books under each (floored) rating i.e. 2, 3, 4,...
const groupedRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {})