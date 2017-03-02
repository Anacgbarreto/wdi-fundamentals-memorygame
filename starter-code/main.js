var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

function createCards() {
	var gameBoard = document.getElementById("game-board");

	for (var i = 0; i < cards.length; i++) {
	  var card = document.createElement("div");
	  card.className = "card";
	  card.setAttribute("data-card", cards[i]);
	  card.addEventListener("click", isTwoCards);
  	gameBoard.appendChild(card);
	}
}

createCards();

function isMatch() {
  var cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
  	cards[i].innerHTML = "";
  }

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("YOU FOUND A MATCH");
	} else {
		alert("TRY AGAIN");
	}
}

function isTwoCards() {
	this.innerHTML = "<img width='100%' src='" + this.getAttribute("data-card") + ".png'>";

	cardsInPlay.push(this.getAttribute("data-card"));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
