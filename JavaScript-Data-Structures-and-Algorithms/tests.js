'use strict'

let arr = [1, 2, 3, 4, 5];

function findSum(arr, weigth) { // O(n^2)
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if(arr[i] + arr[j] === weigth) return [arr[i], arr[j]];
    }
  }
  return -1;
}

function findSumBetter(arr, weigth) { 
  let hashTable = {};
  for(let i = 0; i < arr.length; i++) {
    let currentElement = arr[i],
        difference = weigth - currentElement;
    if(hashTable[currentElement] != undefined) {
      return [i, hashTable[weigth - currentElement]];
    } else {
      hashTable[difference] = i;
    }
  }
  return -1;
}

console.log(findSum(arr, 9))