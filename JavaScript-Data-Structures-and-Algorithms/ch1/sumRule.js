// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
function n(n) {
  var count = 0;
  for(let i = 0; i < n; i++) {
    count += 1; // h(n) = n
  }

  for (let i = 0; i < 5 * n; i++) {
    count += 1; // p(n) = 5n
  }

  return count;
}

/*
O(h(n) + p(n)) = O(n + 5n) = O(6n) => O(n) = n 
Applying the rule: The 6 operation is not dependent on the input n. As n 
approaches infinity, it will become negligible
*/ 
