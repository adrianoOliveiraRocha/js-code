function exampleLinear(n) {
  for (let i = 0; i < n; i++) { // O(n)
    console.log(i); 
  }
}

function exampleQuadratic(n) { // O(n**2)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(i, j);      
    }
  }
}

function exampleCubic(n) { // O(n**3)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = 0; k < j; k++) {
        console.log(i, j, k);
      }      
    }
  }
}

function exampleLogarithmic(n) { // log2(n)
  for (let i = 2; i <= n; i = (i * 2)) {
    console.log(i);
  }
}

exampleLogarithmic(100000);