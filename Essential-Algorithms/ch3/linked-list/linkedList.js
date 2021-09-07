'use strict'

const { IntegerCell, IntegerCellInterface } = require("./modules");

// My linked list
let ic9 = new IntegerCell(); ic9.value = 9;
let ic47 = new IntegerCell(); ic47.value = 47; ic47.next = ic9;
let ic72 = new IntegerCell(); ic72.value = 72; ic72.next = ic47;
let ic31 = new IntegerCell(); ic31.value = 31; ic31.next = ic72;

const integerCellInterface = new IntegerCellInterface();

// console.log(integerCellInterface.Iterate(ic72));
// console.log(integerCellInterface.findCell(ic72, 72));
// console.log(integerCellInterface.findCellBefore(ic72, 9));

/*
let ic23 = new IntegerCell(); ic23.value = 23;
console.log(integerCellInterface.addAtBeginning(ic31, ic23));
*/

/*
let ic23 = new IntegerCell(); ic23.value = 23;
console.log(integerCellInterface.addAtEnd(ic31, ic23));

let top = ic31;
while(top) {
  console.log(top);
  top = top.next;
}
*/


/*
let ic23 = new IntegerCell(); ic23.value = 23;
console.log(integerCellInterface.insertCell(ic72, ic23));

let top = ic31;
while(top) {
  console.log(top);
  top = top.next;
}
*/

/*
let top = ic31;
let count = 0;
while(top) {
  count++;
  top = top.next;
}

integerCellInterface.deleteCell(ic72);

top = ic31;
let count1 = 0;
while(top) {
  count1++
  top = top.next;
}

console.log(count, count1);
*/