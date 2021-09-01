'use strict'
// Proposition 2. ∀ n ∈ N n^2 + n + 41 is a prime number.
const isPrime = require('../assets/isPrime').isPrime2;

function proposition2(n) {
  return isPrime(Math.pow(n, 2) + n + 41);
}

let numbers = [0, 1, 2, 3, 20, 39, 40];

for (let element of numbers) {
  console.log(proposition2(element));
}
