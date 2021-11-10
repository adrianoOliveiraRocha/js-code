'use strict'
let arr = [6,4,3,2,1,5];

function bublleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  console.log(arr);
}

bublleSort(arr);

