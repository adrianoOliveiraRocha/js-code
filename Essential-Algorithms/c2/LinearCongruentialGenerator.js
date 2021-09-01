'strict'

function LinearCongruencialGenerator(n, min, max) {
  // result = Min + number Mod (Max – Min + 1)
  return parseInt(min + (n * Math.sqrt(n, max)) % (max - min + 1)); 
}

module.exports = LinearCongruencialGenerator;