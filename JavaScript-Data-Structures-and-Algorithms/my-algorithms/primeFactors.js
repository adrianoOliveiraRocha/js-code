'use strict'

function primeFactors(dividend, result, divisor=2) {
	
	if (dividend === 1) {
		console.log(result);
		return;
	}

	if (dividend === 0 || divisor === 0) return;

	if(dividend % divisor === 0) {
		result.push(divisor);
		primeFactors((dividend / divisor), result, divisor)
	} else {
		primeFactors(dividend, result, (divisor + 1));
	}

}