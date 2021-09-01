function dividingPoint(arr) {
	/*
	This algorithm picks the values at the beginning, end, and middle of the
	array, compares them, and returns whichever item lies between the other two
	*/
	let n1 = arr[0]; // first
	let n2 = arr[parseInt(arr.length / 2)]; /*midle*/ 
	let n3 = arr[arr.length - 1]; // last
		
	if(n1 > n2 && n1 < n3) return n1;
	if(n2 > n1 && n2 < n3) return n2;
	
	return n3;
	/*
	Because this algorithm performs only a few fixed steps, it has O(1) perfor-
	mance and its runtime is independent of the number of inputs N.
	*/
}

let arr = [];
for(let i = 0; i <= 100; i++) {
	if(1 % 2 == 0) arr.push(i);
	else arr.push(i * 7);
}

console.log(dividingPoint(arr));

