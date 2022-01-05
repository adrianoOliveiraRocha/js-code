'use strict'

// Time Complexity: O(n)
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

// Time Complexity: O(log 2 (n))
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

// Time Complexity: O(log 2 (n))
function sqrtDouble(number) {
  let threshold = 0.1, 
      upper = number, 
      lower = 0, 
      middle;
  
  while (upper - lower > threshold) {
    middle = (upper + lower) / 2;
    if(middle * middle > number) {
      upper = middle;
    } else {
      lower = middle;
    }
  }

  return middle;

}

console.log(sqrtDouble(9));



