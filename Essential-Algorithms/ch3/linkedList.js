'use strict'

function IntegerCell() {
  this.value;
  this.next;
}

let ic9 = new IntegerCell(); ic9.value = 9;
let ic47 = new IntegerCell(); ic47.value = 47; ic47.next = ic9;
let ic72 = new IntegerCell(); ic72.value = 72; ic72.next = ic47;
let ic31 = new IntegerCell(); ic31.value = 31; ic31.next = ic72;

function Iterate(top) { // O(N)
  while(top) { // O(N)
    console.log(top.value);
    top = top.next;
  }
}

Iterate(ic31);

