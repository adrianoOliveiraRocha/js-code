'use strict'

/*
CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH 
*/

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i - 1]) {
      if(arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp
      }
    }
  }

  return arr;

}
console.log(mythical)
console.log(sortComparator(mythical));
