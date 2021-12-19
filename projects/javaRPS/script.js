
// Function - Random choice for computer
function randomChoice() {
  var choices = ["R","P","S"]
  var randomNum = Math.floor(3*Math.random())
  return choices[randomNum]
}

//Function - Determine the winner
function determineWinner(playerChoice,compChoice){
    // User chooses R
    if (playerChoice.toUpperCase() == 'R' && compChoice == 'R'){
        alert("The computer chose " + compChoice + ". Its a tie!")
        gameTie++;
        }
        else if (playerChoice.toUpperCase() == 'R' && compChoice == 'S'){
            alert("The computer chose " + compChoice + ". You won!!")
            gameWin++;
        }
        else if (playerChoice.toUpperCase() == 'R' && compChoice == 'P'){
            alert("The computer chose " + compChoice + ". You lost!!")
            gameLoss++;
        }
        // User chooses P
        else if (playerChoice.toUpperCase() == 'P' && compChoice == 'R'){
            alert("The computer chose " + compChoice + ". You won!!")
            gameWin++;
        }
        else if (playerChoice.toUpperCase() == 'P' && compChoice == 'S'){
            alert("The computer chose " + compChoice + ". You lost!!")
            gameLoss++;
        }
        else if (playerChoice.toUpperCase() == 'P' && compChoice == 'P'){
            alert("The computer chose " + compChoice + ". Its a tie!!")
            gameTie++;
        }
        // User Chooses S
        else if (playerChoice.toUpperCase() == 'S' && compChoice == 'R'){
            alert("The computer chose " + compChoice + ". You lost!!")
            gameLoss++;
        }
        else if (playerChoice.toUpperCase() == 'S' && compChoice == 'S'){
            alert("The computer chose " + compChoice + ". Its a tie!!")
            gameTie++;
        }
        else if (playerChoice.toUpperCase() == 'S' && compChoice == 'P'){
            alert("The computer chose " + compChoice + ". You Won!!")
            gameWin++;
        }
        else {
            alert("Please enter a valid character")
        }
}

//Main
var gameWin = 0
var gameLoss = 0
var gameTie = 0
var playAgain = true

while (playAgain){
    // Get users choice
    var playerChoice = prompt("Enter R, P, or S:")
    // Get computer choice
    var compChoice = randomChoice()

    // Determine who won
    determineWinner(playerChoice,compChoice)

    // Post record
    alert("Game Wins: " + gameWin + "\nGame Losses: " + gameLoss + "\nGame Ties: " + gameTie)

    // Ask to play again
    playAgain = confirm("Do you want to play again?")
}
    