function permute(arr, count) {
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
        permute(arr, count + 1);
      }
      else {
        console.log(arr);
      }       
    }
  }
}

permute(['A', 'C', 'D'], 0);

/*

[ 'A', 'C', 'D' ]
[ 'C', 'A', 'D' ]
[ 'C', 'D', 'A' ]
[ 'D', 'C', 'A' ]
[ 'D', 'A', 'C' ]
[ 'A', 'D', 'C' ]
repeate => [ 'A', 'C', 'D' ]. it need stop here
the result is rigth but it go on...

*/