function showPascalTriangle(cols, rows, mt=[1]) {
	let res = []
	function main(cols, rows, mt) {
		let show = [];
		mt = mt.reverse();
		if(mt.length == 1) res.push(mt); // mt = [1]
		show.push(mt[0])
	  for(let i = 0; i < mt.length; i++) {
			if(mt[i + 1]) show.push(mt[i] + mt[i+1]);
			else show.push(mt[i])
		}
		mt = show.filter(el => el != 0);
		res.push(mt) // response
		cols++;
		if(cols < rows) {
			main(cols, rows, mt);
		}
	}
	main(cols, rows, mt)
	return res
}

let res = showPascalTriangle(0, 5);
console.log(res);

function pascalTriangle(row, col) {
	if(col == 0) return 1;
	else if(row == 0) return 0;
	else {
		return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1)
	}
}

// console.log(pascalTriangle(5, 2))
