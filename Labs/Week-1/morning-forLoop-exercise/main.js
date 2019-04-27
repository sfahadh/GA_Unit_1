// #1: Write a for loop that prints all numbers between 0-50, inclusive.
// let i = 0;
// while(i <= 50) {
// 	console.log(i);
// 	i++;
// }

// #2: Write a for loop that prints all even numbers between 0-100, exclusive.
// let i = 0;
// while(i <= 100) {
// 	console.log(i);
// 	i+=2;
// }

// #3: Write a for loop that prints all numbers evenly divisible by 7 between 0-100, inclusive.
// let i = 0;
// while(i <= 100) {
// 	if(i % 7 === 0) {
// 		console.log(i);
// 	}
// 	i++
// }

// #4: Write a for loop that prints all items in the array below.
// let q4items = [10, 1, 23, 1, 20, 3, 19, 9, 16, 21];
// let i = 0;
// while(i < q4items.length) {
// 	console.log(q4items[i]);
// 	i++;
// }

// #5: Write a for loop that prints all items in the array below that have a ```typeof``` string.
let q5items = ['banana', 37, ['bear'], 'thirty', { isCool: true }, 'pikachu'];
for(let i = 0; i < q5items.length; i++) {
	if(typeof q5items[i] == "string") {
		console.log(q5items[i]);
	} else if(Array.isArray(q5items[i])) {
		for(let j = 0; j < q5items[i].length; j++) {
			console.log(q5items[i][j]);
		}
	}
}

// #6: Write a for loop that prints all numbers between 0-50 in reverse, inclusive.

// #7: Write a for loop that prints all items in the array below that are even numbers.

let q7items = [2, 4, 5, 7, 8, 10, 13];

// #8: Write a while loop that prints all numbers between 0-50, inclusive.

// #9: Write a while loop that prints all even numbers between 0-100, exclusive.

// #10: Write a while loop that prints all numbers evenly divisible by 7 between 0-100, inclusive.

// #11: Write a while loop that prints all items in the array below.

let q11items = [90, 31, 54, 700, 1, 3];

// #12: Write a while loop that prints all items in the array below that have a ```typeof``` string.

let q12items = [{ lovesJavascript: true }, 'i write code now', 'so i can do', 35, 'things on my', ['sweet graphic calculator'], 'computer'];

// #13: Write a while loop that prints all numbers between 0-50 in reverse, inclusive.

// #14: Write a while loop that prints all items in the array below that are even numbers.

let q14items = [2, 4, 5, 7, 8, 10, 13];
