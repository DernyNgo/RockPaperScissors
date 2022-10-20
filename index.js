// begin with a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters: playerSelection and computerSelection.
// Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock."
// Make the function's playerSelection parameter case-insensitive so useres can input Rock, ROCK, RoCK, etc.
// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
// Use console log to display the results of each round and the winner at the end
// Use prompt() to get input from the user 

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    const playerSelectionString = playerSelection.toLowerCase();
    const computerSelectionString = computerSelection.toLowerCase();

    if (playerSelectionString !== 'rock' && playerSelectionString !== 'paper' && playerSelectionString !== 'scissors') {
        return 'Invalid Input'
    } else if (playerSelectionString === computerSelectionString) {
        return (`It's a tie, since you both chose ${playerSelectionString}`);
    } else if (playerSelectionString === 'rock' && computerSelectionString === 'scissors') {
        return ("You won! Rock beats Scissors.");
    } else if (playerSelectionString === 'paper' && computerSelectionString === 'rock') {
        return ("You won! Paper beats Rock.");
    } else if (playerSelectionString === 'scissors' && computerSelectionString === 'paper') {
        return ("You won! Scissors beat Paper.");
    } else { 
        return (`You lost! ${computerSelectionString} beats ${playerSelectionString}`);
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Please enter either Rock, Paper, or Scissors!");
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
}
