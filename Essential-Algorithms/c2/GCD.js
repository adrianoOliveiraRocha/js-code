'strict'

function GCD(a, b) {
  while(b != 0) {
    let reminder = a % b;
    a = b;
    b = reminder;
  }
  return a
}

console.log(GCD(4851, 3003))