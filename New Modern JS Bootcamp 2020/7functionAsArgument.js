// Illustrate that a function can be the argument of another function
function cry() {
    console.log("BOO HOO I'M SAD!");
}

function rage() {
    console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(rage, 10)
repeatNTimes(cry, 8)

// Add another function

function pickOne(f1, f2) {
    let rand = Math.random();
    if(rand < 0.5){
        f1();
    } else {
        f2()
    }
}

pickOne(cry, rage)
