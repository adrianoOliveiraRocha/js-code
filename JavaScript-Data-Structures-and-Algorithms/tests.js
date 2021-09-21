'use strict'

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function espiralArray(arr, size) {
  for(let i = 0; i < size; i++) {
    console.log(arr[0].pop(i))    
  }
  console.log("\n");   
  arr[0] = undefined
  return arr.filter(element => element !== undefined);
}

function run(arr) {
  arr = espiralArray(arr, arr[0].length)
  let newArr = [];
  if(arr.length > 0) {
    let lines = arr.length;
    let columns = arr[0].length;
    let newArr = []
    for(let col = columns - 1; col >= 0; col--) {
      let a = []
      for(let lin = 0; lin < lines; lin++) {
        // console.log(lin, col)
        a.push(arr[lin][col]);
      }
      newArr.push(a)
    }
    console.log(newArr)    
  }
  console.log();
}

run(arr)



