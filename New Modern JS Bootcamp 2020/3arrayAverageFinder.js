/*
 Write a function to find the average value in
 an array of numbers
 */

function avg(theArray) {
    let total = 0;
    for (let num of theArray) {
        total += num;
    }

    return total/theArray.length;

}