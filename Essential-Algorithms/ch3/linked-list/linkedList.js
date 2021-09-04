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

let ic23 = new IntegerCell(); ic23.value = 23;
console.log(integerCellInterface.addAtBeginning(ic31, ic23));

