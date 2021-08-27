'use strict'

const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');
const base = DICTIONARY.length; // 62

function encodeID (num) {
  let encoded = '';

  if (num === 0) {
    return DICTIONARY[0];
  } 

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }
  return reverseWord(encoded);
}

function reverseWord(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

function decodeID(id) {
  let decoded = 0;
  for (let index = 0; index < id.split('').length; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index)); 
  }
  return decoded;
}

let encodedId = encodeID(778);
console.log(encodedId);
let decodedId = decodeID(encodedId);
console.log(decodedId);
