/*
Using sets, return the union less intersection of two arrays
*/ 

let arr1 = [11, 2, 7, 8, 45, 23, 34, 32]
let arr2 = [1, 2, 7, 8, 45, 65]

// let arr1 = [1, 2, 7, 8, 45, 65]
// let arr2 = [11, 2, 7, 8, 45, 23, 34, 32]

function unionLessIntercection(arr1, arr2) {
  let set1 = new Set(arr1), set2 = new Set(arr2);
  let uniques = new Set()
  
  for(let el of set1) {
    if(set2.has(el)) {
      set2.delete(el);
    } else {
      uniques.add(el)
    }
  }
  [...set2].forEach(el => uniques.add(el)) 
  
  return uniques;
}

console.log(uniqueList(arr1, arr2))

