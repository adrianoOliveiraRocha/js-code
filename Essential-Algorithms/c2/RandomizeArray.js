'strict'
const LinearCongruencialGenerator = require('./components/LinearCongruentialGenerator');

function RandomizeArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    let j = LinearCongruencialGenerator(i, 1, 50);
    console.log(j); 
  }
}

let arr = [];
for(let i = 1; i <= 50; i++) arr.push(i);

RandomizeArray(arr);