// JavaScript Document
// Prime Number Test Function
"use strict";
function primeNumTest(n) {

	if (n === 1) {		// Eliminate # 1
		return false;
	} else if (n === 2) {	// Eliminate # 2
		return true;
	} else {
		for (var x = 2; x < n; x++) {  // Check numbers greater than 2
			console.log(x);  // Show each number as it is checked
			if (n % x === 0) {  // Eliminate all non-prime numbers when modulus is zero
				console.log(n + " is NOT a prime number");
				return false;
			}
		}
		console.log(n + " is a prime number");
		return true;
	}
}

console.log(primeNumTest(9))

// ***************************************
// Check Pennsylvania Drinking Age Function

function drinkAge(age) {
	
	if (age >= 21) { // Check for valid age
		
		console.log("You are old enough to legally drink alcohol in Pennsylvania.  Please do so with care.");
		return true;
		
	}	//  Age is not old enough
	console.log("You are NOT old enough to drink legally in Pennsylvania.");
	return false;
}

console.log(drinkAge(20.99))

// ***************************************
// Console Count Function

function counting(n){
	
	if (n > 0){   // Eliminate negative numbers
	for (var x = 1; x < n; x++) { // Count to console until you reach the number specified
		console.log(x);
	}
	
	return true;
	}
	return false;
}
console.log(counting(8))

// ***************************************
// Write to Screen after Check Function

function numCheck(num){
	
	if (num >= 17 && num <= 21){ // Check for numbers 17 to 21
		
		document.write("You should probably hold.");
		return true;
	} 
		// If numbers not between 17 and 21
	document.write("You should take a hit or it's already too late.");
	return false;
}
console.log(numCheck(22))

// *****************************************



