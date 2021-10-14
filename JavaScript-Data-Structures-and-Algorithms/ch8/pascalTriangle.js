
function pascalTriangle(cols, rows, mt=[1]) {
	let show = [];
	mt = mt.reverse();
	if(mt.length == 1) console.log(mt); // mt = [1]
	show.push(mt[0])
  for(let i = 0; i < mt.length; i++) {
		if(mt[i + 1]) show.push(mt[i] + mt[i+1]);
		else show.push(mt[i])
	}
	mt = show.filter(el => el != 0);
	console.log(mt) // response
	cols++;
	if(cols < rows) {
		pascalTriangle(cols, rows, mt);
	}
}

pascalTriangle(0, 5)
