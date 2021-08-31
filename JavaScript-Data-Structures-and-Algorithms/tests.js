'use strict'

let arr = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

for(let index in arr) {
  console.log(arr[index]);
  if (index == 5) break;
}