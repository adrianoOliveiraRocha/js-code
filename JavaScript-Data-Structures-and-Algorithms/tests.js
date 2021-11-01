// WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME

function isItPalindrome(word) {
  let x = word.split('')
  let y = word.split('').reverse()
  for(let i = 0; i < x.length; i++) {
    if(x[0] != y[0]) {
      return false;
    }
  }
  return true;
}

// recursive solution 
function isItPalindromeRS(word) {
  let response = true
  function main(word) {
    let arr = word.split('');
    let first = arr.shift(), last = arr.pop();
    if(last) {
      if(first != last) {
        response = false;
        return;
      }
      main(arr.join(''))
    }
  }
  main(word)
  return response;

}
// true
console.log(isItPalindromeRS('racecar'))
console.log(isItPalindromeRS('testset'))
console.log(isItPalindromeRS('aibohphobia'))
// false
console.log(isItPalindromeRS('adriano'))
console.log(isItPalindromeRS('anywordnopalindrome'))
console.log(isItPalindromeRS('ohmygosh'))
