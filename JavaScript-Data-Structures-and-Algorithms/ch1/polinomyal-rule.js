// If f(n) is a polynomial of degree k, then f(n) is O(n**k)

function a(n) {
  var count = 0;
  for (let i = 0; i < n**n; i++) { // n ** n
    count += 1;
  }
  return count;
}

console.log(a(3));

/*
In this example, f(n) = nˆ2 because line 4 runs n*n iterations.
*/