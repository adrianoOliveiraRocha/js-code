'use strict'

/*
Create a function that generates an object of words (as keys) and the number 
of times the words occur in a string ordered by highest to lowest occurrences. 
*/

let sentence = "practice makes perfect. get perfect by practice. just practice";

function wordCount(sentence) {
  let keep = {}
  let words = sentence.split(" ")
  words = words.map(w => w.replace(".", "").replace(",", "").replace(":", ""));

  for(let w of words) {
    if(keep[w]) keep[w]++;
    else keep[w] = 1;
  }

  return keep;
  
}
console.log(sentence);
console.log(wordCount(sentence))
