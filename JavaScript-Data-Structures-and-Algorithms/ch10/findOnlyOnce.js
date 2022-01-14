'use strict'
/*
Given a sorted array in which all elements appear twice (one after one) and one element
appears only once, find that element in O(log 2 n) complexity. This can be done by modifying the
binary search algorithm and checking the addition indices.
*/

let arr = [2, 2, 3, 3, 4, 4, 6, 5];

function findOnlyOnce(arr, low, higth) {
  if(low > higth) return null;
  if(low == higth) return arr[low];

  let mid = Math.floor((higth + low) / 2);

  if(mid % 2 == 0) {
    if(arr[mid] == arr[mid + 1]) {
      return findOnlyOnce(arr, mid + 2, higth);
    } else {
      return findOnlyOnce(arr, low, mid);
    }
  } else {
    if(arr[mid] == arr[mid - 1]) {
      return findOnlyOnce(arr, mid + 1, higth);
    } else {
      return findOnlyOnce(arr, low, mid - 1);
    }
  }
}

function findOnlyOnceHelper() {
  return findOnlyOnce(arr, 0, arr.length);
}

console.log(findOnlyOnceHelper(arr));

/*
if the number of elements in the array is odd, it can exists at least two 
numbers that appears only once. Or none :-\
*/