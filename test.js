// 5 number average function
function getAverage (a,b,c,d,e){
	
	var average = (a + b + c + d + e) / 5;
	return average;
	
}

var myResult = getAverage(21,7,56,99,46);
console.log("the average is " + myResult);


// 2 number difference function
function getDiff (a,b){
	
	var diff = (a - b);
	return diff;
	
}

var myDiff = getDiff(42,22);
console.log("the difference is " + myDiff);


// Combine 2 strings function
function donAllen (a,b){
	
	var longString = (a + b);
	return longString;
			
}

	var myString = donAllen('Go ', 'Eagles!!');
	console.log("What I have to say is: " + myString);