const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

const dog = {...canine, isPet: true};
// {family: "Caninae", furry: true, isPet: true}

const lion = {...feline, genus: 'Panthera'};
// {legs: 4, family: "Felidae", genus: "Panthera"}

const catDog = {...feline, ...canine};
// {legs:4, family: "Caninae", furry: true}
