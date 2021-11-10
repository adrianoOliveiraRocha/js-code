'use strict'

function selectionSort(arr) {
  let i = 0
  while(i < arr.length) {
    let min = arr[i]
    for(let j = i; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j]; arr[j] = temp;
      }
    }
    i++;
  }
  return arr;
}

let arr = [7, 4, 5, 9, 8, 2, 1]
console.log(selectionSort(arr))