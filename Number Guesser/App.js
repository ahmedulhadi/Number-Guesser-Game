/** @format */

// Game values
let min = 1,
	max = 10,
	winningNumber = getRandomNum(min, max); 
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for GuessBTN
guessBtn.addEventListener("click", function () {
	console.log(guessInput.value);
	//make sure its int not string value
	let guess = parseInt(guessInput.value);

	//validate input (no wories for empty string since ParseInt but be concern of NaN)
	if (guess < min || guess > max || isNaN(guess)) {
		setMessage(`Please enter a number between ${min} and ${max}.`, "red");
	}
	//Game Over- won
	if (guess === winningNumber) {
		//Disable the iput
		guessInput.disabled = true;
		//change border color
		guessInput.style.borderColor = "green";
		//let the user know they won
		setMessage(
			`${winningNumber} is correct. Congrats,   You have Won!`,
			"green"
		);
		// Change submit button to Play Again
		guessBtn.value = 'Play Again';
		guessBtn.className = 'play-again'

		//add eventListener to Play Again button
		game.addEventListener("mousedown", function (e){ 
			console.log(1) // means clicking anywhere on the DOM
			//Lets specifically chose play again 
			if (e.target.className === 'play-again') {
				window.location.reload();
				
			}
			// e.preventDefault();
		})

		//LOOSE CASE
	} else {
		guessesLeft -= 1;

		if (guessesLeft === 0) {
			//Games over- LOST
			//Disable the iput

			guessInput.disabled = true;
			//change border color
			guessInput.style.borderColor = "red";
			//let the user know they won
			setMessage(
				`${guess} is Not correct. Game Over!. The correct number was ${winningNumber}`,
				"red"
			);

			// Change submit button to Play Again
		guessBtn.value = 'Play Again';
		guessBtn.className = 'play-again'

		//add eventListener to Play Again button
		game.addEventListener("mousedown", function (e){ 
			console.log(1) // means clicking anywhere on the DOM
			//Lets specifically chose play again 
			if (e.target.className === 'play-again') {
				window.location.reload();
				
			}
			// e.preventDefault();
		})


		} else {
			//Game continues- ans wrong
			setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
			//change border color
			guessInput.style.borderColor = "red";

			
		}
	}
});

// funciton gameOver(won, msg) {

// 	//Disable the iput
// 	guessInput.disabled = true;
// 	//change border color
// 	guessInput.style.borderColor = "red";
// 	//let the user know they won
// 	setMessage(
// 		`${guess} is Not correct. Game Over!. The correct number was ${winningNumber}`,
// 		"red");
// }

// getWinningNum
function getRandomNum(min, max) {
	return Math.floor(Math.random()*(max - min+1) +min);

}
//setMessage function
function setMessage(msg, color) {
	console.log(msg);
	message.style.color = color;
	message.textContent = msg;
}
