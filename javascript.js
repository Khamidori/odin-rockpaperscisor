const gameArrayChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*gameArrayChoices.length);
    const computerChoice = String(gameArrayChoices[randomChoice]);
    return computerChoice;
}

function gameRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    if (playerSelection === computerSelection){
        console.log(`it is a tie! ${playerSelection} cannot beat ${computerSelection}`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }
}