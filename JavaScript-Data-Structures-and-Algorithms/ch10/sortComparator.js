'use strict'

/*
CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH 
*/

var mythical = ['adriano oliveira da rocha', 'dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator(arr) {  
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i].length > arr[j].length) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(mythical)
console.log(sortComparator(mythical));
