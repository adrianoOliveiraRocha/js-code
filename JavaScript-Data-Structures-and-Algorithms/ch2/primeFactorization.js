'use strict'

function isPrime2(n) { 
  
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  for (var i = 5; (i * i) <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }

  }

  return true;

}

function myPrimeFactorization(n, i=2) {
  let divisibles = [];
  for (let i = 2; i <= n; i++) {
    let product = n;
    if (product % i === 0) {
      product = n / i; 
      divisibles.push(i);
      while (product % i === 0) {
        divisibles.push(i);
        i = i + 1;
      }
    }
   }

 const primeFactors = divisibles.filter(n => {
   return isPrime2(n);
 })

 return primeFactors;

}

module.exports.myPrimeFactorization = myPrimeFactorization;


function primeFactors(n) {
  const pf = [];
  while (n % 2 === 0) {
    pf.push(2);
    n = n/2;
  }

  for (let i = 3; i * i < n; i = (i + 2)) {
    while(n % i === 0) {
     pf.push(i);
      n = n/i;
    }
  }

  if (n > 2) {
    pf.push(n);
  }

  return pf;

}

module.exports = primeFactors;