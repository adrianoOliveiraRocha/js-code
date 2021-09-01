/*
rule 4
*/

function ContainsDuplicates(arr) {
	for(i = 0; i < arr.length; i++) { // O(N)
		for(let j = 0; j < arr.length; j++) { // O(N)
			if(i != j) { // O(1)
				if(arr[i] == arr[j]) return true; // O(1)
			}
		}
	} 
	return false;
}	

arr1 = [1, 2, 3, 4, 5, 1];
console.log(ContainsDuplicates(arr1));

/*
Rule 5
ContainsDuplicates has O(N) * O(N) and O(1) + O(1)
O(N) * O(N) == O(N**2)
O(1) + O(1) = O(2)
Then we have O(2 + N**2)
Rule 5 lets you ignore factor 2 (it is constant), so the runtime is O(N**2)
Why?
Test: 
	N => 2 * N - multiplie for 2
	2 * (2 * N) = 8N**2 => increased by factor 4
	(2 * N)**2 = 4N**2 => increased by factor 4

*/

/* Less steps */
function ContainsDuplicates(arr) {
  for(i = 0; i < (arr.length - 1); i++) { // O(N)
		for(let j = (i + 1); j < arr.length; j++) { // O(N)
			if(arr[i] == arr[j]) return true; // O(1)
		}
	} 
	return false;
}	