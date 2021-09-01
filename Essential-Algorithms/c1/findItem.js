'use strict'

/*
	2^h = N

	Hight			Nodes (2^h)
	1					2^1 = 2
	2					2^2 = 4
	3					2^3 = 8
	4					2^4 = 16

	2^h = N => log2 N = h => The algorithm runs in O(log2(N)) time

	formula to onvert from base A to Base B
	log A(x) = log B(x) / log B(A)
	Then converting from the base 2 to base A:  
		O(log 2(N)) = O(log A(N)) / O(log A(2))
		log A(2) is ignored because 1 / log A(2) is constant
		then O(log A(N)) / O(log A(2)) = O(log A(N)) for any log base A 
	
	So the performance of this is O(log A(N))

*/

const binaryTree = [
	/*It’s a binary tree because every node has at most two branches*/  
  7, [
    [4, [[2, [1, 3]], [6, [5]]]], [9, [8, 10]]
  ]  
];

function findItem(targetValue, binaryTree) { // O(log(N))

  binaryTree.forEach(element => {
		if(typeof element === 'number') {
			if(targetValue === element) {
				console.log(`The binaryTree contains ${targetValue}`);
			}
		} else {
			findItem(targetValue, element);
		}
	});
	
}

findItem(8, binaryTree);
