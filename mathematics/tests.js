'use strict'
// Proposition 3. a^4 + b^4 + c^4 = d^4 has no solution when a, b, c, d ∈ N +

function proposition3(a, b, c, d) {
  return (Math.pow(a, 4) + Math.pow(b, 4) + Math.pow(c, 4)) === Math.pow(d, 4);
}

console.log(proposition3(95800, 217519, 414560, 422481)); // true

// then =>
// ∃ a, b, c, d ∈ N+  a^4 + b^4 + c^4 = d^4