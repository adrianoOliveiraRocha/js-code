'use strict'

// function quadraticProbingHashing(h, size) {
//   let index = [];
//   for(let i = 1; i <= size; i++) {
//     index.push(h + Math.pow(i, 2));
//   }
//   return index;
// }

let ht = [];
let obj = {
  7: "hi",
  24: "hello",
  42: "sunny",
  34: "weather",
  18: "wow"
}

function quadraticProbin(obj, ht) {
  let factor = 2;
  Object.keys(obj).forEach(key => {
    let index = factor + Math.pow(key, 2);
    console.log(key, index)
    ht[index] = obj[key];
  })
  return ht;
}
console.log(quadraticProbin(obj, ht));