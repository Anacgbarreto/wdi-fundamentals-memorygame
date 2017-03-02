var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/* 
if (cardTwo === cardFour) {
	alert ('You found a match');
} else {
	alert ('Sorry try again');
}
 */

function createCards() {
	var gameBoard = document.getElementById("game-board");

	for (var i = 0; i < 4; i++) {
	  var card = document.createElement("div");
	  card.className = "card";
  	gameBoard.appendChild(card);
	}
}

createCards();