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
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
      return false;
    }
    // Found
    if (x == endPos[0] && y == endPos[1]) {
      return true;
    }
    if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
      return false;
    }
    // Mark the current spot
    mazeMatrix[x][y] = '+';
    printMatrix(mazeMatrix);
    if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
      return true;
    }
    mazeMatrix[x][y] = '.';
    return false;
  }
}

mazePathFinder(board);


