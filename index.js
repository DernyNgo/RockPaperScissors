// begin with a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
}

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters: playerSelection and computerSelection.
// Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock."

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`It's a tie, since you both chose ${playerSelection}`)
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

// Make the function's playerSelection parameter case-insensitive so useres can input Rock, ROCK, RoCK, etc.

let choices = ['Rock', 'Paper', 'Scissors'];
let choices2 = ['ROCK', 'PAPER', 'SCISSORS'];
    console.log(choices.toLowerCase === choices2.toLowerCase);

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end


for (let i = 0; i < 5; i++) {
    playRound();
    console.log(playRound(playerSelection, computerSelection));
}

// Use console log to display the results of each round and the winner at the end

// Use prompt() to get input from the user 

prompt("Please enter either Rock, Paper, or Scissors to begin!");
