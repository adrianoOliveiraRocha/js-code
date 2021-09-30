
let board = 
`%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`

let rows = board.split("\n")

rows = rows.filter((arr) => {
  if(arr.length > 0) return arr.split("")
})

let mazeMatrix = rows.map(function(arr) {
  return arr.split("")
})

function findChar(char, mazeMatrix) {
  let row = mazeMatrix.length, 
      column = mazeMatrix[0].length;
  console.log(row, column)
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      console.log(i, j)
      console.log(mazeMatrix[i][j])
      console.log("\n");
      // if(mazeMatrix[i][j] == char) return [i, j];
    }
  }
}

findChar('x', mazeMatrix)