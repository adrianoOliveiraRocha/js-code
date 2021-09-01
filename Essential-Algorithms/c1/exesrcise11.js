var count = 0;

function algorithm1(numberOfBoards) {
  // O(f(N) × g(N))
  for(let i = 1; i <= numberOfBoards; i++) { // O(f(N))
    // do something... O(g(N))
    count++;
  }
}


function algorithm2(first_board, last_board) {
  
  if(first_board === last_board) {
    count++;    
  } else {
    let middle_board = parseInt((first_board + last_board) / 2);
    try {
      algorithm2(first_board, middle_board);
      algorithm2(middle_board, last_board);
    } catch (error) {
      // "It's finished"
    }
  }
}

// algorithm1(10); // count = 10
// algorithm2(1, 10); // count ≃ 120000