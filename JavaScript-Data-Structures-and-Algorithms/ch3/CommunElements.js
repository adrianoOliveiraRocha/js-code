'use strict'

function CommunElements(data) {
  let communElements = [];
  data[0].forEach(element => { 
    let contains = false;
    for (let i = 1; i < data.length; i++) {
      if(data[i].includes(element)) {
        contains = true;
      } else {
        contains = false; break;
      }
    }
    if(contains) communElements.push(element);
  });
  return communElements;
}

let arr1 = [1, 5, 4, 6, 7], 
    arr2 = [4, 2, 6, 89, 7],
    arr3 = [98, 32, 4, 7, 1, 4],
    arr4 = [34, 2, 55, 2, 7, 32, 4];
 
let data = []; 
data.push(arr1), data.push(arr2), data.push(arr3), data.push(arr4);
console.log(CommunElements(data))