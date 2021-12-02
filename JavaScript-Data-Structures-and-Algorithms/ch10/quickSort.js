'use strict'

function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1)
}

function quickSortHelper(items, left, right) {
  var index; // stop when index == right
  if(items.length > 1) {
    index = partition(items, left, right)
    if(left < index - 1) {
      quickSortHelper(items, left, index - 1)
    } 
    if(index < right) {
      quickSortHelper(items, index, right);
    }        
  }
  return items
}

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

console.log(quickSort([6,1,23,4,2,3]))