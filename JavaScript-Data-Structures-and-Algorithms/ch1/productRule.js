// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))

function a(n) {
  var count = 0;
  for (let i = 0; i < n; i++) { // 5n * n
    count += 1; // n
    for (let i = 0; i < 5 * n; i++) {
      count += 1; // 5n
    }
  }
}

// 5n * n = 5n**2 => O(5n**2) = O(n**2) = n**2