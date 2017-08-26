// Creates an array that lists out all of the possible movie titles.
var movies = [
    "speed",
    "alien",
    "matrix",
    "terminator",
    "taken"
];

// Create variables to hold the letters guessed and number of guesses remaining
var lettersGuessed;
var guessesLeft = 9;


    //Computer makes its guess
    // ?? -- HOW CAN I REPLACE GET THE LETTERS TO SHOW UP WHEN THEY'RE GUESSED?
    var computerChoice = movies[Math.floor(Math.random() * movies.length)];

    var answerArray = [];

        for (var i = 0; i < computerChoice.length; i++) {
            answerArray[i] = "_";
        }

        var lettersLeft = computerChoice.length;

    //Display progress of game
    // ?? -- HOW CAN I HOLD ON TO EACH GUESS INSTEAD OF OVERWRITING IT WITH EACH NEW GUESS?

    document.getElementById("current-word").innerHTML = (answerArray.join(" "));


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        for (var j = 0; j < computerChoice; j++) {
            if (computerChoice[j] === userGuess) {
                answerArray[j] = userGuess;
                lettersLeft--;
            } else {
                guessesLeft--;
            }
        }



    // Displays which guesses have been made
    document.getElementById("letters-guessed").innerHTML = userGuess;

    // Displays guesses remaining
    document.getElementById("guesses-left").innerHTML = guessesLeft;




    }











