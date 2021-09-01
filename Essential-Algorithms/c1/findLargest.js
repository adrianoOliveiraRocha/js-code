'use strict'
// rules 1, 2 and 3
function findLargest(arr) {
  let largest = arr[0]; // O(1)
  arr.forEach(element => { // rule1: O(N) 
    if(element > largest) largest = element; 
  });
  console.log(largest); // O(1)
}

let arr = [4, 5, 6, 7, 8, 9, 45, 3];
findLargest(arr);

// rule 2: O(1 + N + 1) -> O(2 + N)

/*
rule 3: When N grows large, the function N is larger than the constant value 2,
so O(2 + N) simplifies to O(N)
*/