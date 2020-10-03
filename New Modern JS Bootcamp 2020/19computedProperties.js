// We can use a variable as a KEY NAME in an object literal property!
const user = 'Jools';

const userRoles = {
    [user]: 'Admin'
}
userRoles; // {Jools: "Admin"}

// Another Example
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron'

team = {};
team[role] = person;
team; //{host: "Jools Holland"}
// Now do it all at once, the new wAY!
const team = {
    [role]: person,
    [role2]: person2
}
