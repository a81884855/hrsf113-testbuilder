// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var cardNumberS = cardNumber.toString();
	var prefix2 = cardNumberS.slice(0,2);
	var prefix3 = cardNumberS.slice(0,3);
	var prefix4 = cardNumberS.slice(0,4);
	var prefix3_6 = Number(cardNumberS.slice(3,6));
	var prefix6 = cardNumberS.slice(0,6);
	var len = cardNumber.length
	var unionPay = [];
	var swit = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

	for(i=126; i<=925; i++){
		unionPay.push(i)
	}

	if((prefix2=== "38" || prefix2==="39") && len === 14){
		return "Diner's Club";
	}
	else if((prefix2=== "34" || prefix2==="37") && len === 15){
		return "American Express";
	}
	else if((swit.includes(prefix4) || swit.includes(prefix6)) && (len === 16 || len === 18 || len === 19)){
	return "Switch";
	}
	else if((prefix2=== "51" || prefix2==="52" || prefix2=== "53" || prefix2==="54" || prefix2==="55") && len === 16 ){
		return "MasterCard";
	}
	else if((prefix4=== "6011" || prefix3==="644" || prefix3==="645" || prefix3==="646" || prefix3==="647" || prefix3==="648" || prefix3==="649" || prefix2==="65") && (len === 16 || len === 19)){
		return "Discover";
	}
	else if((prefix4=== "5018" || prefix4=== "5020" || prefix4=== "5038" || prefix4=== "6304") && (len >= 12 && len <= 19)){
		return "Maestro";
	}
	else if((prefix3 === "622" && unionPay.includes(prefix3_6)|| prefix3 === "624" || prefix3 === "625" || prefix3 === "626" || prefix4 === "6282" || prefix4 === "6283" || prefix4 === "6284" || prefix4 === "6285"|| prefix4 === "6286"|| prefix4 === "6287"|| prefix4 === "6288") && (len === 16 || len === 17 || len === 18 || len === 19)){
		return "China UnionPay";
	}
	else if(prefix4=== "4123" && (len === 13 || len === 16 || len === 19)){
		return "Visa";
	}
 //  Note: `cardNumber` will always be a string
 //  The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 //  The American Express network always starts with a 34 or 37 and is 15 digits long

 //  Once you've read this, go ahead and try to implement this function, then return to the console.
};


