const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let card1Num = null;
let card2Num = null;
let player1Card = null;
let player2Card = null;
let player1Score = 0;
let player2Score = 0;

function buildDeck(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let card = {
				num: arr1[i],
				suit: arr2[j],
				rank: arr1[i]
			}
			deck.push(card);
		}
	}
	// console.log(deck);
	return deck;
}

function cardToRank() {
	for(face in deck) {
		if(deck[face].rank === "Jack") {
			(deck[face].rank = 11);
		}
		if(deck[face].rank === "Queen") {
			(deck[face].rank = 12);
		}
		if(deck[face].rank === "King") {
			(deck[face].rank = 13);
		}
		if(deck[face].rank === "Ace") {
			(deck[face].rank = 14);
		}
	}
}

function dealCardsToPlayers() {
	card1Num = Math.floor(Math.random() * deck.length);
	player1Card = deck[card1Num];
	deck.splice(card1Num, 1);
	// console.log(player1Card);
	// console.log(deck);

	card2Num = Math.floor(Math.random() * deck.length);
	player2Card = deck[card2Num];
	deck.splice(card2Num, 1);
	// console.log(player2Card);
	// console.log(deck);
}

function announceCards() {
	document.getElementById("showPlayer1Card").innerHTML = `Player 1 is showing the ${player1Card.num} of ${player1Card.suit}`;
	
	document.getElementById("showPlayer2Card").innerHTML = `Player 2 is showing the ${player2Card.num} of ${player2Card.suit}`;
}

function announceWinner() {
	if(player1Card.rank > player2Card.rank) {
		document.getElementById("player1Score").innerHTML = ++player1Score 
	} else if(player1Card.rank < player2Card.rank) {
		document.getElementById("player2Score").innerHTML = ++player2Score
	} else {
		console.log("It's a tie");
	}

	if(player1Score === 5) {
		document.getElementById("player2Wins").style.display = "none";
		document.getElementById("player1Wins").style.display = "block";
		document.getElementById("play").disabled = true;
		
	} else if(player2Score === 5) {
		document.getElementById("player2Wins").style.display = "block";
		document.getElementById("player1Wins").style.display = "none";
		document.getElementById("play").disabled = true;
	}
}

function returnCardsToDeck() {
	deck.splice(card1Num, 0, player1Card);
	deck.splice(card2Num, 0, player2Card);
	// console.log(deck);
}

function resetGame() {
	window.location.reload();
}

function playGame() {
	cardToRank();
	dealCardsToPlayers();
	announceCards();
	announceWinner();
	returnCardsToDeck();
}

buildDeck(values, suits);
playGame();

















