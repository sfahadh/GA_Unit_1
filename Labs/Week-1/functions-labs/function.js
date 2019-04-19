const sum = (x, y) => {
	console.log(x + y);
}

sum(10, 10);

const printTriangle = (x) => {
	let hash = ''
	for(let i = 0; i < x; i++) {
		console.log(hash += "#");
	}
}

printTriangle(5);


const minusOne = (num) => {
	console.log(num-1);
}
minusOne(5);

const getLastElement = (arr) => {
	console.log(arr[arr.length-1]);
}
getLastElement([5, 3, 1, 6, 13]);


