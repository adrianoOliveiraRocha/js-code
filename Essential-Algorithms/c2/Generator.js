'strict'
// X n+1 = (A × X n + B) Mod M
function Generator(seed) {
  let a = 7, b = 5, m = 11; // constants
  let x = (a * seed + b) % m; 
  let result = [];
  
  do {
    x = (a * x + b) % m;
    result.push(x);    
  } while (x != seed);

  return result;
  
}

module.exports = Generator;