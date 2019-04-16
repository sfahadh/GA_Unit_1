// Exercise 1 --------------------------------------->
const calculateCube = (volume) => {
	return volume * volume * volume;
}
console.log(calculateCube(5));

// Exercise 2 --------------------------------------->
const isAVower = (char) => {
	let vowel = char.toLowerCase();
	return (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u");
}
console.log(isAVower("I"));

// Exercise 3 --------------------------------------->
const getTwoLengths = (str1, str2) => {
	let arr = [str1.length, str2.length];
	return arr;
}
console.log(getTwoLengths("fahad", "low"));

// Exercise 4 --------------------------------------->
const getMultipleLengths = (strings) => {
	let arr = [];
	for(let i = 0; i < strings.length; i++) {
		arr.push(strings[i].length);
	};
	return arr;
}
console.log(getMultipleLengths(["can", "I", "get", "a", "chopped", "cheese"]));

// Exercise 5 --------------------------------------->
const maxOfThree = (num1, num2, num3) => {
	return Math.max(num1, num2, num3);
} 
console.log(maxOfThree(3, 1, 3));

// Exercise 6 --------------------------------------->
const printLongestWord = (words) => {
	let longestWord = "";
	for(let i = 0; i < words.length; i++) {
		if(words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// Exercise 7 --------------------------------------->
const Transmogrify = (num1, num2, num3) => {
	return (num1 * num2) ** num3;
}
console.log(Transmogrify(5, 3, 2));

// Exercise 8 --------------------------------------->
const FibonacciSequence = (fibonacci) => {
	let total = 0;
	for(let i = 0; i <= fibonacci; i++) {
		total = i + (i + 1);
		total += fibonacci[i + 2];
	}
	return total;
}
console.log(FibonacciSequence(40));

/* [Project Euler problem #2](https://projecteuler.net/problem=2)
* Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
* Adjust the function to push the **even numbered** values into an array.
* Adjust the function to return the summed value of the array.
* Find the sum of the even numbered values that do not exceed four million. */

// Exercise 9 --------------------------------------->
let findNeedle = (needle) => {
	for(let i = 0; i < needle.length; i++) {
		if(needle[i] === "needle") {
			return `found the needle at position ${i}`
		}
	}
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// Exercise 10 --------------------------------------->
let sumPositive = (positive) => {
	let total = 0;
	for(let i = 0; i < positive.length; i++) {
		if(positive[i] > 0) {
			total += positive[i];
		}
	}
	return total;
}
console.log(sumPositive([1, -4, 7, 12]));























