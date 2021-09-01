'use strict'

const binaryTree = [
	7, [
    [4, [[2, [1, 3]], [6, [5]]]], [9, [8, 10]]
  ]  
];

function findItem(targetValue, binaryTree) { // O(log(N))
  binaryTree.forEach(element => {
    if(typeof element === 'number') {
      if (element === targetValue) {
        console.log('Finded ' + targetValue);
      }
    } else if(typeof element === 'object') findItem(targetValue, element);
  });
}

for (let index = 0; index <= 10; index++) { // O(N)
  findItem(index, binaryTree);  
}

// O(N log(N))
