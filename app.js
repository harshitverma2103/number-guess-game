// Generate a random number 

let randomNumber = parseInt((Math.random() * 100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    subt.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100) {
        alert('Please enter a number less than 100!')
    } else
        previousGuesses.push(guess);
    if (numGuesses === 11) {
        displayGuesses(guess);
        displayMessage(`Game Over! Number was ${randomNumber}`);
        endGame();
    } else {
        displayGuesses(guess);
        checkGuess(guess);
    }
}
