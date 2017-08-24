// Creates an array that lists out all of the possible movie titles.
var movies = [
    ["S", "P","E","E", "D"],
    ["A", "L", "I", "E", "N"],
    ["M", "A", "T", "R","I","X"]
];

// Creating variables to hold the number of guesses remaining and which letters have been guessed.
var lettersGuessed;




    //Computer makes its guess
    // ?? -- HOW CAN I REPLACE THE LETTERS WITH BLANK SPACES UNTIL THEY'RE GUESSED?
    var computerChoice = movies[Math.floor(Math.random() * movies.length)];
    document.getElementById("current-word").innerHTML = computerChoice;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;


    // Displays which guesses have been made
    document.getElementById("letters-guessed").innerHTML = userGuess;

        // ?? -- HOW CAN I HOLD ON TO EACH GUESS INSTEAD OF OVERWRITING IT WITH EACH NEW GUESS?
        var guessesLeft = 10;
        var text = "";
        var i;
        for (i = 0; i < guessesLeft; i++) {
            text += userGuess[i] + ", ";
        }

    }

document.getElementById("letters-guessed").onkeyup = function() {
        var text = document.getElementById("")
}




    // ?? -- HOW CAN I REPLACE THE SPACES IN COMPUTERCHOICE WITH CORRECTLY GUESSED LETTERS?









    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
    //
    //     if ((userGuess === "r") && (computerChoice === "s")) {
    //         wins++;
    //     } else if ((userGuess === "r") && (computerChoice === "p")) {
    //         losses++;
    //     } else if ((userGuess === "s") && (computerChoice === "r")) {
    //         losses++;
    //     } else if ((userGuess === "s") && (computerChoice === "p")) {
    //         wins++;
    //     } else if ((userGuess === "p") && (computerChoice === "r")) {
    //         wins++;
    //     } else if ((userGuess === "p") && (computerChoice === "s")) {
    //         losses++;
    //     } else if (userGuess === computerChoice) {
    //         ties++;
    //     }

        // // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
        //     "<p>You chose: " + userGuess + "</p>" +
        //     "<p>The computer chose: " + computerChoice + "</p>" +
        //     "<p>wins: " + wins + "</p>" +
        //     "<p>losses: " + losses + "</p>" +
        //     "<p>ties: " + ties + "</p>";
        //
        // // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
//     }
// };
