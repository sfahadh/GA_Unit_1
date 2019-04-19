const arr = [-52,-46,-8,104,-207,-62];

let positive = (num) => {
	if(num > 0) {return};
}

console.log(arr.some(positive));

// const map = (array, callback) => {
//     const newArray = []
//     for (let i=0; i < array.length; i++) {
//         const newElement = callback(array[i]);
//         newArray.push(newElement);
//     }
//     return newArray;
// }

// const resultArray = map(
//     ['Vanilla','Chocolate','Strawberry','Rocky Road'],
//     (currentArrayElement) => {
//         return currentArrayElement + " ice cream";
//     }
// )

// console.log(resultArray);