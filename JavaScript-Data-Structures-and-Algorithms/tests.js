'use strict'

let arr = [1, 3, 14, 7, 8, 1, 2]

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)]
  while(left <= right) { 
    while(pivot > array[left]) {
      left++
    }
    while(pivot < array[right]) {
      right--
    }
    if(left <= right) {
      var temp = array[left]
      array[left] = array[right]
      array[right]= temp
      left++; right--;
    }
  }
  return left;
}

function quickSelectInPlace(A, l, h, k) {
  let p = partition(A, l, h)
  console.log(p);
  if(p == (k - 1)) {
    console.log(A);
    return A[p]
  } else if(p > (k - 1)) {
    return quickSelectInPlace(A, l, p - 1, k)
  } else {
    return quickSelectInPlace(A, p + 1, h, k)
  }
}

function medianQuickSelect(arr) {
  return quickSelectInPlace(arr, 0, arr.length - 1, Math.floor(arr.length / 2))
}

console.log(quickSelectInPlace(arr, 0, arr.length - 1, 4)) 
