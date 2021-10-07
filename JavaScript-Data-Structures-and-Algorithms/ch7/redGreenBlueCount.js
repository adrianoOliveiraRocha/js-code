'use strict'

function redGreenBlueCount(arr) {
  let RED = 0, GREEN = 1, BLUE = 2;
  let counter = Array(3).fill(0);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == RED) counter[RED]++;
    else if(arr[i] == GREEN) counter[GREEN]++;
    else if(arr[i] == BLUE) counter[BLUE]++; 
  }
  return counter;
}
console.log(redGreenBlueCount([0,1,1,1,2,2,2]))