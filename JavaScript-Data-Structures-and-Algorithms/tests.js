'use strict'

var board = 
`%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`;

let rows = board.split("\n")

function generateColumnArr(arr) {
  if(arr.length > 0) return arr.split("");
}

let mazeMatrix = rows.filter(generateColumnArr);

function findChar(char, mazeMatrix) {
  let row = mazeMatrix.length;
  let column = mazeMatrix[0].length;

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      if(mazeMatrix[i][j] == char) return [i, j];
    }
  }
}

function printMatrix(matrix) {
  let mazePrint = "",
      row = matrix.length,
      column = matrix[0].length;
  
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      mazePrint += matrix[i][j];
    }
    mazePrint += "\n";
  }
  console.log(mazePrint);
}

function mazePathFinder(mazeMatrix) {
  let row = mazeMatrix.length,
      column = mazeMatrix[0].length,
      starPos = findChar('e', mazeMatrix),
      endPos = findChar('x', mazeMatrix);
  
  path(starPos, endPos);
  function path(x, y) {
    // go on...
  }
}


