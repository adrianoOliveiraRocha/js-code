'use strict'

/*
3. Check for a set of prime factors.
Let’s define ugly numbers as those whose only prime factors are
2, 3, or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ... shows the
first 11 ugly numbers. By convention, 1 is included.
To do this, divide the number by the divisors (2, 3, 5) until it
cannot be divided without a remainder. If the number can be
divided by all the divisors, it should be 1 after dividing everything.
*/

function maxDivide(number, divisor) { // O(log divisor (number))
	while (number % divisor === 0) {
		number /= divisor;
	}
	return number;
}

function isUgly(number) { //O(log 2 (n))
	number = maxDivide(number, 2);
	number = maxDivide(number, 3);
	number = maxDivide(number, 5); 
	return number === 1;
}

function arrayNUglyNumbers (n) { // O(n(log 2 (n)))
	let uglyNumber = [];
	let counter = 0, currentNumber = 1;
	
	while (counter != n) {
		if (isUgly(currentNumber)) {
			uglyNumber.push(currentNumber);
			counter += 1;
		}
		currentNumber += 1;
	}

	return uglyNumber;
	
}

const elevenFirstUN = arrayNUglyNumbers(11);
console.log(elevenFirstUN);
