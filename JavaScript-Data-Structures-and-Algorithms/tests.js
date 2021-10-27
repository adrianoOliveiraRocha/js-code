// my solution
function permute(arr) {
  let count = 0;
  function main(arr) {  
    let first = arr[0]
    console.log(arr)
    for (const el of arr) {
      for(let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if(first == temp && arr[i + 1]) {
          arr[i] = arr[i + 1];
          arr[i + 1] = first;         
        }   
        
        if(first == arr[arr.length - 1] && count < arr.length) {
          main(arr);
        }
        else if(count < arr.length) {
          console.log(arr);
        }
        if(count >= arr.length) return;
        count++

      }
    }
  }

  main(arr)

}
let initialArr = ['A', 'C', 'D']
permute(initialArr);
