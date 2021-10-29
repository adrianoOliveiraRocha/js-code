// WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME
// easy solution
function itIsPalindrome(word) {
  let x = word.split('')
  let y = word.split('').reverse()
  for(let i = 0; i < x.length; i++) {
    if(x[0] != y[0]) {
      return false;
    }
  }
  return true;
}

console.log(itIsPalindrome('adriano'))
console.log(itIsPalindrome('madam'))

// recursive solution ?
