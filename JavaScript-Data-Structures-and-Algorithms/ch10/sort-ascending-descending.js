'use strict'

var array1 = [12,3,4,2,1,34,23];

function ascending(a, b) {
  return a - b
}

function descending(a, b) {
  return b - a
}

console.log(array1.sort(ascending))
console.log(array1.sort(descending))
