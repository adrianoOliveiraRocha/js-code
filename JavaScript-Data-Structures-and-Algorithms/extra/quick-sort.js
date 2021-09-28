
function swap(items, leftIndex, rigthIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rigthIndex];
  items[rigthIndex] = temp;
}	

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
let items = [5,3,7,6,2,9]
var result = quickSort(items, 0, items.length - 1);
console.log(result)