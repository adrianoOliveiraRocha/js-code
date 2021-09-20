'use strict'

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function espiralArray(arr, size) {
  let size = arr[0].length; 
  for(let i = 0; i < size; i++) {
    console.log(arr[0][i])    
  }
}

espiralArray(arr, arr[0].length)

