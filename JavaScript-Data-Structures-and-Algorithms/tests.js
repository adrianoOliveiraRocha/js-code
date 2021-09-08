'use strict'

let arr = [1, 2, 3, 4, 5];

let result = arr.slice(2, 4)
console.log(result);

function arraySlice(arr, init, end) {
  let temp = [];
  for(let i in arr) {
    if(i >= init && i < end) temp.push(arr[i]);
  }
  return temp;
}

let result1 = arraySlice(arr, 2, 4)
console.log(result);