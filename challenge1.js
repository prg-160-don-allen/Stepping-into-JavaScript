// JavaScript Document
// Prime Number Test Function

function test_prime(n) {

	if (n === 1) {		// Eliminate # 1
		return false;
	} else if (n === 2) {	// Eliminate # 2
		return true;
	} else {
		for (var x = 2; x < n; x++) {  // Check numbers greater than 2
			console.log(x);  // Show each number as it is checked
			if (n % x === 0) {  // Eliminate all non-prime numbers
				console.log(n + " is NOT a prime number");
				return false;
			}
		}
		console.log(n + " is a prime number");
		return true;
	}
}

console.log(test_prime(9))

