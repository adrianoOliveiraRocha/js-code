'use strict'

function IntegerCell() {
  this.value;
  this.next;
}

function IntegerCellInterface() { 

  this.Iterate = function (top) {
    while(top) {
      console.log(top.value);
      top = top.next;
    }
  }

  this.findCell = function (top, target) {
    while(top) {
      if(top.value === target) return top;
      top = top.next;
    }  
  }

  this.findCellBefore = function (top, target) {
    if (!top) return;

    while(top) {
      if(top.next) {
        if(top.next.value === target) return top.next;
      }      
      top = top.next;
    }

    return "Doesn't exists";

  }

  this.addAtBeginning = function (top, newCell) { // O(1)
    newCell.next = top;
    console.log(newCell);
  }

  this.addAtEnd = function (top, newCell) { //O(N)
    while(top.next) {
      top = top.next;
    }
    top.next = newCell;
  }

  this.insertCell = function (afterMe, newCell) {
    newCell.next = afterMe.next;
    afterMe.next = newCell;
  }

  this.deleteCell = function (afterMe) {
    afterMe.next = afterMe.next.next;
  }
  
}

module.exports.IntegerCell = IntegerCell;
module.exports.IntegerCellInterface = IntegerCellInterface;