// 1. Destructuring Arrays
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

const [gold, silver, bronze] = raceResults;

const [firstPosition, , , fourth] = raceResults;

// With a REST operator
const [raceWinner, ...others] = raceResults;


// 2. Destructuring Objects
const winner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
};

// const {first, last} = winner;

// const {first, country, title} = winner;

// const {first, country: nation, title: honorific} = winner;

const {first, country: nation, ...other} = winner;

// 3. Nested Destructuring
const results = [{
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
 },
 {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
 },
 {
    first: 'Galen',
    last: 'Rupp',
    country: 'United Sates'
 }
]

const [,{country}] = results; // Gives the country of the 2nd array element
/*
const [{first: goldWinner}, {country}] = results; 
*/
// 4. Destructuring Parameters
const fullName = ({first, last}) => {
    return `${first} ${last}`
}
const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
}

fullName(runner); //"Eliud Kipchoge" (We are only interested in first and last)

// Another example
const runner2 = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

function print(person) {
    const {
        first, last, title
    } = person;
    console.log(`${first} ${last}, ${title}`)
}

//Destructured
function print({first, last, title})  {
    console.log(`${first} ${last}, ${title}`)
}

print(runner2); 

// Another example using array
const response = [
    'HTTP/1.1',
    '200 0K',
    'application/json'
]
// We want a function that uses the 2nd element of the array
function parseResponse ([protocol, statusCode, contentType]) {
    console.log(`status: ${statusCode}`);
}



