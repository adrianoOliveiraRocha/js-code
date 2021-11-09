
function linearSearch(arr, n) {
  for (const el of arr) {
    if(el == n) return true;
  }
  return false;
}

function binarySearch_mysolution(arr, n) {
  let response = false;
  function main(arr, n) {
    let center = Math.ceil(arr.length / 2)
    if(n == arr[center]) {
      response = true;
    } 
    if(arr.length > 0) {
      if(n < arr[center]) {
        main(arr.splice(0, center), n)
      } else if (n > arr[center]) {
        main(arr.splice(-center), n)
      }      
    }
  }  
  main(arr, n)
  return response;  
}

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
