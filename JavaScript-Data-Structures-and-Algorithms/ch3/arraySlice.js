'use strict'

let arr = [1, 2, 3, 4, 5];

function arraySlice(arr, beginIndex, endIndex) { // O(N)

  if(!beginIndex && !endIndex) return arr;
  if(!beginIndex) beginIndex = 0;
  if(!endIndex) endIndex = arr.length - 1;

  let temp = [];
  for(let i in arr) { 
    if(i >= beginIndex && i < endIndex) temp.push(arr[i]);
  }
  return temp;
}

let result = arraySlice(arr, 1, 3)
console.log(result);