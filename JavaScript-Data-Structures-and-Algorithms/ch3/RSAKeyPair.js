'use strict'
const isPrime = require('./ch2/isPrime').isPrime2;

/**
 * RSA Encryption
 */

/*
1. Select two (usually large) prime numbers, p and q.
  a. The product of p and q is denoted as n.
  b. The product of (p-1) and (q-1) is denoted as phi.
2. Choose two exponents, e and d.
  a. e is typically 3. Other values greater than 2 can be used.
  b. d is a value such that (e × d) % phi = 1.
*/

// Implementation of calculation d

function modInverse (e, phi) {
  let m0 = phi;
  let t;
  let q;
  let x0 = 0;
  let x1 = 1;

  if (phi === 1) return 0;

  while (e > 1) {
    // q is quotient
    q = Math.floor(e / phi);
    t = phi;
    // phi is remainder now, process some as Eclud's algo
    phi = e % phi, e = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) {
    x1 += m0;
  }

  return x1;

}

function RSAKeyPair (p, q) {
  
  if (!(isPrime(p) && isPrime(q))) return;
  if (p == q) return;

  let n = p * q,
      phi = (p - 1) * (q - 1),
      e = 3,
      d = modInverse(e, phi);
  console.log(`n: ${n}; phi: ${phi}; e: ${e}; d: ${d}`);
  // Public key: [e,n], Private key: [d,n]
  return [[e, n], [d, n]];

}

console.log(RSAKeyPair(5, 11));
