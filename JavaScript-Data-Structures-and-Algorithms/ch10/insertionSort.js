function insertionSort(arr) {
  let goOn = true
  while(goOn) {
    let shouldContinue = 0
    for(let i in arr) {
      if(arr[i] > arr[parseInt(i) + 1]) {
        let temp = arr[i]
        arr[i] = arr[parseInt(i) + 1];
        arr[parseInt(i) + 1] = temp;
        shouldContinue++
      }         
    }
    if(shouldContinue == 0) goOn = false; 
  }
  return arr;
}

let arr = [14, 33, 27, 10, 35, 40, 42, 44];
let resultArr = insertionSort(arr)
console.log(resultArr);