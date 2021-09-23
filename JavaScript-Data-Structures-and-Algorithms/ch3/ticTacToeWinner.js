'use strict'

function ticTacToeWinner(arr) {
  //diagonal
  if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) return arr[0][0];
  if(arr[2][0] === arr[1][1] && arr[1][1] == arr[0][2]) return arr[2][0];
  //end diagonal

  //vertical
  if(arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) return arr[0][0];
  if(arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) return arr[0][1];
  if(arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) return arr[0][2];
  //end vertical

  //horizontal
  if(arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) return arr[0][0];
  if(arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) return arr[1][0];
  if(arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) return arr[2][0];
  //end horizontal

}

function run(arr) {
  let winner = ticTacToeWinner(arr) 
  if(winner) console.log("The winner is " + winner)
  else console.log("So far, we don`t have a winner");    
}

let arr1 = [['O', 'X', '-'], ['-' ,'X', 'O'], ['O', 'X', '-']];
run(arr1);

let arr2 = [['O','-','X'], ['-','O','-'], ['-','X','O']]
run(arr2)

let arr3 = [['O','-','X'], ['-','O','-'], ['-','X','-']]
run(arr3)


