'strict'

/*
Some PRNG algorithms use multiple linear congruential generators with dif-
ferent constants and then select from among the values generated at each step
to make the numbers seem more random and to increase the sequence’s repeat
period. That can make programs produce more random-seeming results, but
those methods are still not truly random.
*/

function pseudoRandom(n) {

  /**
   * Xn+1 = (a * Xn + b) mod m
   * Xo = 0;
   * a = 7;
   * b = 5;
   * m = 11;
   * min = 0
   * max = 100;
   */

  let a = 7, b = 5, m = 3;
  let min = 0, max = 100;
  var rn = 0; // Xo = 0;
  for(let i = 1; i <= n; i++) {
    rn = ((a * rn) + b) % m;
  }

  // return 1 + rn % (max - min + 1);
  return parseInt(min + (rn / m) * (max - min));

}

console.log(pseudoRandom(0));
console.log(pseudoRandom(1));
console.log(pseudoRandom(2));
console.log(pseudoRandom(3));
console.log(pseudoRandom(4));
console.log(pseudoRandom(5));
console.log(pseudoRandom(22));
