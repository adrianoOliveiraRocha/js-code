// given the location x, find the exit e.

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
  
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      if(mazeMatrix[i][j] == char) return [i, j];
    }
  }
}

function printMatrix(matrix) {
  let mazePrintStr = "", 
      row = matrix.length, 
      column = matrix[0].length;
  
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      mazePrintStr += matrix[i][j];
    }
    mazePrintStr += "\n"
  }

  console.log(mazePrintStr);

}

function mazePathFinder(mazeMatrix) {
  var row = mazeMatrix.length,
      column = mazeMatrix[0].length,
      startPos = findChar('e', mazeMatrix),
      endPos = findChar('x', mazeMatrix);
  
  path(startPos[0], startPos[1])

  function path(x, y) {
    // it is out of the matrix?
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) { 
      return false;
    }
    // Is it the final point?
    if (x == endPos[0] && y == endPos[1]) {
      return true;
    }
    // Is there an obstacle or it has already been marked as covered?
    if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
      return false;
    }
    // Mark the current spot
    mazeMatrix[x][y] = '+';
    printMatrix(mazeMatrix);
    if (path(x, y - 1)/*left*/ 
    || path(x + 1, y)/*down*/ 
    || path(x, y + 1)/*rigth*/ 
    || path(x - 1, y)/*up*/) {
      return true;
    }
    mazeMatrix[x][y] = '.';
    return false;
  }

}

printMatrix(mazeMatrix);
mazePathFinder(mazeMatrix);