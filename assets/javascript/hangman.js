

		var words = ["orioles","red sox", "white sox","indians","tigers","diamondbacks","braves","cubs","rockies","astros","royals",
							"angels","twins","yankees","athletics","dodgers","marlins","brewers","mets","phillies","pirates","mariners",
							"rays","rangers","blue jays","padres","giants","cardinals","nationals"];

			var currentWord = "";
			var lettersInCurrentWord = [];
			var blanks = 0;
			var blanksAndSuccess = [];
			var wrongGuesses = [];
			var lettersGuessed = "";
			var wins = 0;
			var loses = 0;
			var guessesRemaining = 9;

	function startGame(){

		guessesRemaining = 9;
		currentWord = words[Math.floor(Math.random() * words.length)];
		lettersInCurrentWord = currentWord.split("");
		blanks = lettersInCurrentWord.length;
		console.log(currentWord);
		blanksAndSuccess = [];
		wrongGuesses = [];

	for (var i = 0; i < blanks; i++) {
		blanksAndSuccess.push("_");
	}

		console.log(blanksAndSuccess);

		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
		document.getElementById("blanks").innerHTML = blanksAndSuccess.join(" ");
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
	}

	function checkLetters(letter){
		var letterInWord = false;

	for (var i = 0; i < blanks; i++) {

		if (currentWord[i] === letter) {
			letterInWord = true;
		}
	}

		if (letterInWord) {
			for(var j = 0; j < blanks; j++) {

				if (currentWord[j] === letter){
					blanksAndSuccess[j] = letter;
			}
		}
	console.log(blanksAndSuccess);
}

		else{
			wrongGuesses.push(letter);
			guessesRemaining--;
		}
}

function roundComplete(){
	console.log("wins: " + wins + " | loses: " + loses + " | guesses-remaining " + guessesRemaining);

	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
	document.getElementById("blanks").innerHTML = blanksAndSuccess.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

if (lettersInCurrentWord.toString() === blanksAndSuccess.toString()) {
	wins++;
		alert("You Win!");

	document.getElementById("wins").innerHTML = wins;

	startGame();
	}

else if (guessesRemaining === 0) {
	loses++;
		alert("You lose");

		document.getElementById("loses").innerHTML = loses;

		startGame();
	}
}


	startGame();

	document.onkeyup = function(event) {
	lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(lettersGuessed);

	roundComplete();
};

