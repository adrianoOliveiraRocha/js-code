'use strict'

function findSum(arr, weigth) { // O(n^2)
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if(arr[i] + arr[j] === weigth) return [arr[i], arr[j]];
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5];
console.log(findSum(arr, 9))