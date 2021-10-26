let initArr = ['A', 'C', 'D'] 
let count = 0;

function permute(arr) {  
  let first = arr[0]
  console.log(arr)
  for (const el of arr) {
    for(let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      if(first == temp && arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = first;         
      }   
      
      if(first == arr[arr.length - 1] && count < initArr.length) {
        permute(arr);
      }
      else if(count < initArr.length) {
        console.log(arr);
      }
      count++

    }
  }
}

permute(initArr);
