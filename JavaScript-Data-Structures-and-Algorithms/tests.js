'use strict'
let array = [5, 2, 4, 6, 1, 3, 2, 6]

function merge(leftA, rightA) {
  /* add all the elements from both arrays in sorted order in a
  result array*/
  let results = [], leftIndex = 0, rigthIndex = 0;
  while(leftIndex < leftA.length && rigthIndex < rightA.length) {
    if(leftA[leftIndex] < rightA[rigthIndex]) {
      results.push(leftA[leftIndex++])
    } else {
      results.push(rightA[rigthIndex++])
    }
  }
  let leftRemains = leftA.slice(leftIndex)
  let rigthRemains = rightA.slice(rigthIndex)
  // add remaining to resultant array
  console.log(leftRemains, rigthRemains);
  return results.concat(leftRemains).concat(rigthRemains);
}

console.log(merge([5, 2, 4, 6], [1, 3, 2, 6]))