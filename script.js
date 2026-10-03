let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {

    let guess = Number(
        document.getElementById("guessInput").value
    );

    let message = document.getElementById("message");

    if (guess < 1 || guess > 100) {
        message.textContent =
            "Enter a number between 1 and 100!";
        return;
    }

    attempts++;

    document.getElementById("attempts").textContent = attempts;

    if (guess === randomNumber) {

        message.textContent =
            "🎉 Correct! You won!";

    } else if (guess > randomNumber) {

        message.textContent =
            "📈 Too High!";

    } else {

        message.textContent =
            "📉 Too Low!";
    }
}

function restartGame() {

    randomNumber =
        Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts").textContent = 0;

    document.getElementById("message").textContent =
        "Start guessing!";

    document.getElementById("guessInput").value = "";
}