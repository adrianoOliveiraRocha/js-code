
function from10to2(n) {
  let result = []
  function main(n) {
    let rest = n % 2; let division = Math.floor(n / 2);
    result.push(rest);
    if(division > 1) {
      main(division)
    } 
  }
  main(n)
  return result.reverse()
}

let result = from10to2(9).join(''); 
console.log(result);