'use strict'

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]  
]

function espiralArray(arr, resp) {

  let size = arr[0].length
  arr = (function () {
    for(let i = 0; i < size; i++) {
      resp.push(arr[0].shift(i))    
    }
    arr[0] = undefined
    return arr.filter(element => element !== undefined);
  })();

  if(arr.length > 0) {
    let lines = arr.length;
    let columns = arr[0].length;
    let newArr = []
    for(let col = columns - 1; col >= 0; col--) {
      let a = []
      for(let lin = 0; lin < lines; lin++) {
         a.push(arr[lin][col]);
      }
      newArr.push(a)
    }
    espiralArray(newArr, resp)    
  }

}
let resp = []
espiralArray(arr, resp)

console.log(resp);



