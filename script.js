// RandomNumberGenerator in JavaScript

// Selected elements
const inputText = document.getElementById("number");
const display = document.getElementById("display");
const submitBtn = document.getElementById("submitBtn");
const attemptsDisplay = document.getElementById("attempts");

// Generates the random number
let minNumber = 1;
let maxNumber = 100;
let attempts = 0;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Functionality to check the guess
submitBtn.onclick = function() {
    let guess = parseInt(inputText.value);

    if (isNaN(guess)) {
    } if (guess === randomNumber) {
        attempts++;
        attemptsDisplay.innerHTML = `attempts: ${attempts}`;
        display.innerHTML = "Wohoo, You guessed correctly!";
    } else if (guess < randomNumber) {
        attempts++;
        attemptsDisplay.innerHTML = `Attempts: ${attempts}`;
        display.innerHTML = "Too low! Try again.";
    } else if (guess > randomNumber){
        attempts++;
        attemptsDisplay.innerHTML = `Attempts: ${attempts}`;
        display.innerHTML = "Too high! Try again.";
    } else {
        display.innerHTML = "Please enter a valid number.";
    }
};
