'use strict'

function findOnlyOnce(arr, low, high) {
  if(low > higth) return null;
  if(low == higth) return low;

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

let arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
findOnlyOnce(arr, 4);
