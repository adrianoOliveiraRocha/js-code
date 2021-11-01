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
  function main(word, begin=0, end = (word.length - 1)) {
    if(begin >= end) return true;
    if(word.charAt(begin) != word.charAt(end)) {
      response = false;
      return;
    } else {
      main(word, (begin + 1), (end - 1))
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
