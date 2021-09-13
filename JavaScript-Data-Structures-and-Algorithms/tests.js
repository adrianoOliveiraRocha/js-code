'use strict'

function CommunElements(data) {
  let howMatchArray = data.length;
  data[0].forEach(element => {
    console.log(element);
  });

}
let arr1 = [1, 5, 4, 6, 7], 
    arr2 = [4, 2, 6, 89],
    arr3 = [98, 32, 4, 1, 4];
 
let data = []; 
data.push(arr1), data.push(arr2), data.push(arr3);
CommunElements(data)