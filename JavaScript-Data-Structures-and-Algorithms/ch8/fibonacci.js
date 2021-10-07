
function fibonacci(n) {
  if(n <= 1) return n; // F1 = 1; F0 = 0
  let last = 1, lastlast = 0;
  let sum = 0;
  for(let i = 1; i < n; i++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  } 
  return sum;
}

console.log(fibonacci(68))