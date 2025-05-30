// RandomNumberGenerator in JavaScript

// Selected elements
const inputField = document.getElementById("number");
const display = document.getElementById("display");
const submitBtn = document.getElementById("submitBtn");
const resetButton = document.getElementById("resetButton");

// Generates the random number
let minNumber = 1;
let maxNumber = 100;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Functionality to check the guess
submitBtn.onclick = function() {
    let guess = parseInt(inputField.value);

    if (isNaN(guess)) {
        display.innerHTML = "Please enter a valid number.";
    } else if (guess === randomNumber) {
        display.innerHTML = "Wohoo, You guessed correctly!";
        resetButton.style.display = "block";
    } else if (guess < randomNumber) {
        display.innerHTML = "Too low! Try again.";
    } else {
        display.innerHTML = "Too high! Try again.";
    }
};

// Reset function to start the game all over again
resetBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    display.innerHTML = "";
    resetBtn.style.display = "none"; // Hide reset button again
};
