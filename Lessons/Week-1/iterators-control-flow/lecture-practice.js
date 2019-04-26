const yourMoney = 50;
const catPrice = 100;

// if(yourMoney == catPrice) {
// 	console.log("You have just enough to buy a cat!");
// } else if(yourMoney < catPrice) {
// 	console.log("You cannot buy a cat. You need more dollars :(");
// } else {
// 	console.log("You can buy a cat and will have dollars left over");
// }

// let purchase = (yourMoney == catPrice) ? console.log("You have just enough to buy a cat!") :
// (yourMoney < catPrice) ? console.log("You cannot buy a cat. You need more dollars :(") :
// console.log("You can buy a cat and will have dollars left over");

switch (yourMoney) {
	case (catPrice):
		console.log("You have just enough to buy a cat!");
		break;
	case (yourMoney < catPrice):
		console.log("You cannot buy a cat. You need more dollars :(");
		break;
		default: 
		("You can buy a cat and will have dollars left over");
}