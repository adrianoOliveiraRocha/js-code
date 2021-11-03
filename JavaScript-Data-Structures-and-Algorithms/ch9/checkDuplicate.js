// check duplicates using Set
let checkDuplicates = (arr) => {
  let x = new Set(arr)
  return !(x.size == arr.length)
}

console.log(checkDuplicates([1, 2, 3, 4, 5, 6, 1]));