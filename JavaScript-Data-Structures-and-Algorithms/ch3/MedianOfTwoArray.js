'use strict'

function MedianOfTwoArray(arr1, arr2) {
  let arr = arr1.sort().concat(arr2.sort());
  if(arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)];
  else {
    let n = Math.floor((arr.length - 1) / 2)
    return (arr[n] + arr[n + 1]) / 2;
  }  
}

console.log(MedianOfTwoArray([1, 2, 3], [4, 5, 6]));
console.log(MedianOfTwoArray([11 , 23 , 24 ], [32 , 33 , 450 ]));
console.log(MedianOfTwoArray([1 , 2 , 3 ], [2 , 3 , 5 ]));