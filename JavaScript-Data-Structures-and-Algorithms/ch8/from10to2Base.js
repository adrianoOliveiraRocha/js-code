
function from10to2Base(n) {
  let binaryString = '';
  function main(n) {
    if(n < 2) {
      binaryString += n;
      return;
    } else {
      main(Math.floor(n / 2));
      main(n % 2);
    }
  }
  main(n);
  return binaryString
}

console.log(from10to2Base(232))
