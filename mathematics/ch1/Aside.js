'use strict'

function Aside(num, divider=2) {
  while(num % divider == 0) {
   num = num / divider;
   console.log(divider);
  }
  if(num > 1) Aside(num, (divider + 1)); 
}

Aside(2394)