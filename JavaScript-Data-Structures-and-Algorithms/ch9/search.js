
function linearSearch(arr, n) {
  for (const el of arr) {
    if(el == n) return true;
  }
  return false;
}

function binarySearch(arr, n) {
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