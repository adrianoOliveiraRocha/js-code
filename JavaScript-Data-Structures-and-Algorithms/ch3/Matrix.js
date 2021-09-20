'use strict'

function Matrix(rows, columns) {
  let arr = new Array(rows)
  for(let i = 0; i < columns; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let arr = Matrix(3, 3)

for (const i in arr) {
  for(let j = 0; j < arr[i].length; j++) {
    arr[i][j] = i * j;
  }
}

console.log(arr)