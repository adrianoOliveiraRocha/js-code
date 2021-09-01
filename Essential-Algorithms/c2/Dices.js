'strict'
// Probability

const Dice = {
  u: [1, 2, 3, 4, 5, 6],

  majorThenFour: function() {
    // Probality of a number major then 4
    let x = 0; // quantity of elements major then four
    this.u.map(e => {
      if(e > 4) x++;      
    });
    console.log(((x / this.u.length) * 100).toFixed(3), '%');
  },

  evenNumber: function() {
    // Ocurrence of a even number
    let x = 0; // quantity of even numbers
    this.u.map(e => {
      if(e % 2 === 0) x++;
    });
    console.log(((x / this.u.length) * 100).toFixed(3), '%');
  }
}