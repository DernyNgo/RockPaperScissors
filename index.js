//establish player and computer scores to start at 0
let playerScore = 0;
let computerScore = 0;

//establish choices within global scope
const choices = ['rock', 'paper', 'scissors'];

//make sure event listeners are being triggered via the html file (console logs confirm this)
let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
playRound('rock', getComputerChoice());
})

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
playRound('paper', getComputerChoice());
})

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
playRound('scissors', getComputerChoice());
})

//create function to generate random computer choices
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

//create display of results via DOM methods
let displayPlayerScore = document.createElement("h1");
    displayPlayerScore.innerText = playerScore;
    results.appendChild(displayPlayerScore);

let displayComputerScore = document.createElement("h1");
    displayComputerScore.innerText = computerScore;
    results.appendChild(displayComputerScore);

let finalResults = document.createElement("h1");
    finalResults.innerText = "";
    gameResults.appendChild(finalResults);
  
//insert game logic for player and computer selections, make sure wins add 1 point to winners' stored points, and behaves properly. also make sure the function stops if any player reaches 5 points
function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        test = `It\'s a tie, since you both chose ${playerSelection}.`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore ++;
        test = "You won! Rock beats Scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        test =  "You won! Paper beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        test = "You won! Scissors beat Paper."
    } else {
        computerScore ++;
        test = `You lost! ${computerSelection} beats ${playerSelection}`;
    }

    if (playerScore >= 5) {
        test = 'You won the game! Reload the page to play again.'
    } else if (computerScore >= 5) 
        test =  'You lost the game. Reload the page to play again.'

    displayPlayerScore.innerText = playerScore;
    displayComputerScore.innerText = computerScore;
    finalResults.innerText = test;
}

