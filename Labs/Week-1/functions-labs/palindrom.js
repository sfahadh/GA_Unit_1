const palindrome = (str) => {
	let wordReverse = "";
	for(let j = str.length-1; j >= 0; j--) {
		wordReverse += str[j];
	}
	// if(str == wordReverse) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	str == wordReverse ? true : false
	console.log(wordReverse);
}

palindrome("word");


const identical = (word1, word2) => {
	// console.log(word1 === word2);
	switch (word1) {
		case word2:
		console.log(true);
		break;
		default: 
		console.log(false);
		break;
	}
}
identical("letter", "letter");


function numbers(num1, num2, num3, num4) {
	let total = "";
	for(let i = 0; i < arguments.length; i++) {
		total += arguments[i.toString()];
	}
	console.log(total);
}

numbers(1, 2, 3, 4);