/*
 Write a getCard() function which returns
 a random playing card object, like:
    {
        value : 'K'
        suit : 'clubs'
    }

Pick a random value from: 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
Pick a random suit from: clubs, spades, hearts, diamonds

Return both in an object
*/

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const valIdx = Math.floor(Math.random() * values.length);
    

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);

    return {value : values[valIdx], suit : suits[suitIdx]};
    
}

// v2.0: Reducing the repeated Math functions 

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const value = pick(values);
    
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suit = pick(suits);

    return {value : value, suit : suit}; // or return {value: pick(values), suit: pick(suits)};
    
}