'use strict'

let ht = new Array(11);
let obj = {
  7: "hi",
  24: "hello",
  42: "sunny",
  34: "weather",
  18: "wow"
}

function primeNumberHashing(obj, ht) {
  let factor = ht.length;
  Object.keys(obj).forEach(key => {
    let index = parseInt(key) % factor;
    ht[index] = obj[key];
  })
  return ht;
}

console.log(hash(obj, ht));



