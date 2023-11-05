//declaring Array for Rock, Paper and Scissor randomizer and User/Computer Points tally declaration
const gameArrayChoices = ["Rock", "Paper", "Scissor"];
let userPoints = 0;
let computerPoints = 0;

//randomizing computer choice in Rock, Paper and Scissor 
function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*gameArrayChoices.length);
    const computerChoice = String(gameArrayChoices[randomChoice]);
    return computerChoice;
}


//function to check user input against randomized computer input
function gameRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    
    if (playerSelection === computerSelection){
        console.log(`it is a tie! ${playerSelection} cannot beat ${computerSelection}`);
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        computerPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        userPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        userPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        computerPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        computerPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        userPoints += 1;
        console.log(`User Score: ${userPoints} Computer Score: ${computerPoints}`);
    }  
}

//Rock Paper and Scissor game looping and declaring winner
function game() {

    for (counter = 1; counter < 6; counter++){
        let userInput = prompt("Rock, Paper or Scissor?:");
        gameRPS(userInput); 
    }

    //Conditionals for declaring the winner
    if (userPoints === computerPoints){
        console.log("It is a tie!");
    } else if (userPoints < computerPoints){
        console.log("You lost!");
    } else {
        console.log("You won!");
    }
}
//running the game
game();
