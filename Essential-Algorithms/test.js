'use strict'

function IntegerCell() {
  this.value;
  this.next;
}
// linked list
let ic9 = new IntegerCell(); ic9.value = 9;
let ic47 = new IntegerCell(); ic47.value = 47; ic47.next = ic9;
let ic72 = new IntegerCell(); ic72.value = 72; ic72.next = ic47;
let ic31 = new IntegerCell(); ic31.value = 31; ic31.next = ic72;

function UseIntegerCell() {

  return {
    Iterate(top) {
      while(top) {
        console.log(top);
        top = top.next;
      }
    },
    
    findCell(top, target) {
      while(top) {
        if(top.value === target) return top;
        top = top.next;
      }
    },

    findCellBefore(top, target) { //O(N)
  
      while(top) { //O(N)
        if(top.next) 
          if(top.value === target || top.next.value === target) 
            return top;          
        top = top.next;
      }    
      return "Doesn't exists";    
    },

    AddAtBeginning(top, newCell) {
      newCell.next = top.next;
      top.next = newCell;
    },

    AddAtTheEnd() {
      //...
    }

  }

}

const uic = new UseIntegerCell()


