//rest declare, spread invoke

const person = {name: 'john', lastName: 'doe', city: 'venice', job: 'foreman'}
// const {job, ...restOfPerson} = person; console.log(job, restOfPerson)

//functions
const getAverage = (name, ...scores) =>{
  console.log(name);
  console.log(scores);
}

// getAverage(person.name, 89, 90, 55, 76)

const test = [89, 85, 23, 67]
getAverage(person.name, ...test) 