'use strict'
// next => Bonus: Find a Square Root of a Float. pag 144
function sqrtIntNaive(number) {
  if(number == 0 || number == 1) return number;

  let index = 1, square = 1;
  while(square < number) {
    if(square == number) return square;

    index++;
    square = index * index;
  }

  return index;

}

function sqrtInt(number) {
  if(number === 0 || number === 1) return number;

  let start = 1, end = number, ans;
  while(start <= end) {
    let mid = parseInt((start + end) / 2);
    if(mid * mid == number) return mid;
    if(mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;

}

console.log(sqrtInt(9))
console.log(sqrtInt(49))

