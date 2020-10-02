function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

// Antoher example
function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}

// Another REST example
const multiply = (...nums) => (
    nums.reduce((total, currVal) => total*currVal)
)

