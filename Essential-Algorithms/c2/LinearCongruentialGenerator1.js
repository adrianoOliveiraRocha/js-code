'strict'

function LinearCongruencialGenerator1(n) {
  // result = Min + (number ÷ M) × (Max – Min)
  let min = 1, max = 100, m = 11;
  return min + (n / m) + (max - min);
}

module.exports = LinearCongruencialGenerator1;