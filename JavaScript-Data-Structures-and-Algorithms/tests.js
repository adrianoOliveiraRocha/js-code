
function linearSearch(arr, n) {
  for (const el of arr) {
    if(el == n) return true;
  }
  return false;
}

function binarySearch(arr, n) {
  let center = Math.ceil(arr.length / 2)
  // console.log(arr, n, center)
  if(n == arr[center]) console.log(true);
  else if(n < arr[center]) {
    binarySearch(arr.splice(0, center), n)
  } else {
    binarySearch(arr.splice(-center), n)
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n = 4;
console.log(binarySearch(arr, 3))
