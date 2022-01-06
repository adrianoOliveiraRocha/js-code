'use strict'

function findTwoSum(array, sum) {
  let response = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = (i + 1); j < array.length; j++) {
      if(array[i] + array[j] == sum) response.push([array[i], array[j]]);
    }
  }
  return response;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sum = 7;
console.log(findTwoSum(array, sum));

