function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

// So we can now run the following to see their values
triple(6);
double(20);
halve(6);

// Another example
function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isInNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);

// We can now run 
isNiceWeather(45);
isInNineties(1945);
isChild(17);
