function add(x, y) {
    return x+y;
}

const subtract = function(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x* y;
}

const divide = function (x, y) {
    return x/y;
}

// We can write an array  to loop through the functions. Run by using operations[i](x,y) 
const operations = [add, subtract, multiply, divide];

// Hard-coding the result by using a for loop,
for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

// Using a method: A method is derived from adding a function 
//to an object. So we can say thing.doSomething(50, 2)
const thing = {
    doSomething: multiply
}