
/*
Rotate a matrix to the left by 90 degrees
For example, the following:
    101
    001
    111
rotates to this:
    111
    001
    101
*/

function rotateMatrix90Left(matrix) {
  let result = []
  for (let i = (matrix.length - 1); i >= 0; i--) {
    let temp = []
    for(let j = 0; j < matrix[0].length; j++) {
      temp.push(matrix[i][j])
    }
    result.push(temp)
  }
  return result;
}

let matrix = [
  [1, 0, 1], [0, 0, 1], [1, 1, 1]
]

console.log(rotateMatrix90Left(matrix))