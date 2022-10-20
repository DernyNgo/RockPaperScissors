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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`It's a tie, since you both chose ${playerSelection}`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ("You won! Rock beats Scissors.");
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ("You won! Paper beats Rock.");
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ("You won! Scissors beat Paper.");
    } else { 
        return (`You lost! ${computerSelection} beats ${playerSelection}`);
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Please enter either Rock, Paper, or Scissors!").toLowerCase();
      let computerSelection = getComputerChoice().toLowerCase();
      console.log(playRound(playerSelection, computerSelection));
    }
}
