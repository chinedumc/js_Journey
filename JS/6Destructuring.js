let first = 'John'
let second = 'Bob'

[second, first] = [first, second]

console.log(first, second)

const nedum = {
  first: 'Nedum',
  last: 'Ciicii',
  city: 'Venice',
  pet: {
    dog: 'Scooby',
    cat: 'Scanner'
  }
}

function printPerson({first, last, city, pet:{dog}}) {
  console.log(first, last, city, dog) // Result: Nedum Ciicii Venice Scooby
}
printPerson(nedum)