
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n = 11;

function binarySearch(arr, n) {
  let lowIndex = 0, higthIndex = (arr.length - 1)
  while(lowIndex < (higthIndex + 1)) {
    let midIndex = Math.floor((lowIndex + higthIndex) / 2)
    console.log(lowIndex, higthIndex)
    if(arr[midIndex] == n) {
      return midIndex;
    }
    else if(n > arr[midIndex]) {
      lowIndex = midIndex;
    }
    else {
      higthIndex = midIndex
    }
  }
  return -1
}

console.log(binarySearch(arr, n))
