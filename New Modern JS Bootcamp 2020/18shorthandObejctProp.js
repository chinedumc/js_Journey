const reviews = [4.5, 6.0, 2.1, 3.8, 2.5, 4.9, 2.9, 2.7];

const max = Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((sum, r) => sum + r);
const avg = sum / reviews.length;

const stats = {min, max, sum, avg}
stats; //{min: 2.1, max: 6, sum: 29.4, avg: 3.7}