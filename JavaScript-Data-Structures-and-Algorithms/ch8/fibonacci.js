let test = 78;

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

// console.log(fibonacci(test))

function getNthFibo(n) {
  if(n <= 1) return n;
  else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
}

// console.log(getNthFibo(test))

function getNthFiboBetter(n, lastlast, last) {
  if(n == 0) {
    console.log("n == 0 and lastlast = " + lastlast)
    return lastlast;
  }
  else if(n == 1) {
    console.log("n == 1 and last = " + last)
    return last;
  }
  return getNthFiboBetter(n-1, last, last + lastlast);
}
// lastlast = last (fib0 = 0); last = last (fib0 = 0) + lastlast (fib1 = 1)
console.log(getNthFiboBetter(test, 0, 1)); 
