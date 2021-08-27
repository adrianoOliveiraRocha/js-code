'use strict'

function isPrime1(n) { //O(n)
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;

}

function isPrime2(n) { //sqrt(n)

  if (n <= 1) return false; // 1 is note prime
  if (n <= 3) return true; // 2 is prime and 3 is prime

  if (n % 2 == 0 || n % 3 == 0) {
    /* n is greater than 2. If n mod 2 is 0, n is divisible for itself,
    for 2 and for 1. So n is not prime

    n is greater than 3. If n mod 3 is 0, n is divisible for itself,
    for 3 and for 1. So n is not prime */
    return false;
  }

  for (var i = 5; (i * i) <= n; i = i + 6) {
    /*
    1 - Do begin in 5 because it was tested until 4 already;
    2 - if the square root of n is not prime, n is not prime. That's why we should
      test only until the square root of the number: (i * i) <= n
    3 - Why increment  i = i + 6?
      See the sequence of prime numbers:
      5, 7, 11 (5 + 6 = 11), 13 (7 + 6 = 13), 17 (11 + 6 = 17), 19 (13 + 6),
      23 (19 + 6), 29 (23 + 6)...
      The i will get the value 5, 11, 17 etc.. growing seven units each time.
      When it is 5, we test wether n is divisible by i and by (i + 2). It means 5 and
      7.
      For example: 5 + 6 = 11. Then we should test n mod 5 and n mod 7 (i + 2)
    */

    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }

  }

  return true;

}

module.exports.isPrime1 = isPrime1;
module.exports.isPrime2 = isPrime2;
