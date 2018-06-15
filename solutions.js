// 1. Verbal questions

// A parameter is part of a function and is defined prior to {}'s
// A argument is an expression and used at the end of a function to call it back

// Return is part of the function within {}'s which gives a value  
// and console.log is a message for the computer which displays information in console

// 2. Palindrom

const checkPalindrome = (word) => {
	let reverseString = word.split("").reverse("").join("")
	if(word.toLowerCase() == reverseString.toLowerCase()) {
		return true
	} else {
		return false
	}
}

console.log(checkPalindrome("Radar"));

// How to use reverse.array functions (3 steps):
// store variable in temp variable,
// overwrite location
// reassign variables
// --> need to stop the array at half of length with reverses
// bcz else it will go back to original

// let testArr = ['a', 'b', 'c', 'd']
// const reverseArray = (arr) => {
// 	for (let i = 0; i < arr.length/2; i++) {
// 		const tempt = arr[i];
// 		arr[i] = arr[arr.length - 1 - i]
// 		tarr[arr.length - 1- i] = temp
// 	}
// }


// 

// 3. Digit Sum

// var sumDigits = (num) => {
//   for(var i = 0; i < num.length; i++)
//     var total = ([num] + i);
// }

// console.log(sumDigits(42));