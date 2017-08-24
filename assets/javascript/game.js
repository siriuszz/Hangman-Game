// Creates an array that lists out all of the possible movie titles.
var movies = ["Speed", "Terminator", "Alien"];

// Creating variables to hold the number of guesses remaining and which letters have been guessed.
var geussesLeft = 0;
var lettersGuessed;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoice = movies[Math.floor(Math.random() * movies.length)];

    document.getElementById("current-word").innerHTML = movie[i];









    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerChoice === "s")) {
            wins++;
        } else if ((userGuess === "r") && (computerChoice === "p")) {
            losses++;
        } else if ((userGuess === "s") && (computerChoice === "r")) {
            losses++;
        } else if ((userGuess === "s") && (computerChoice === "p")) {
            wins++;
        } else if ((userGuess === "p") && (computerChoice === "r")) {
            wins++;
        } else if ((userGuess === "p") && (computerChoice === "s")) {
            losses++;
        } else if (userGuess === computerChoice) {
            ties++;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<p>You chose: " + userGuess + "</p>" +
            "<p>The computer chose: " + computerChoice + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    }
};
