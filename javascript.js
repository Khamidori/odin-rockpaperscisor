const gameArrayChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*gameArrayChoices.length);
    const computerChoice = String(gameArrayChoices[randomChoice]);
    return computerChoice;
}

function gameRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    let userPoints;
    let computerPoints;
    
    if (playerSelection === computerSelection){
        console.log(`it is a tie! ${playerSelection} cannot beat ${computerSelection}`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return computerPoints += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return userPoints += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return userPoints += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return computerPoints += 1;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return computerPoints += 1;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return userPoints += 1;
    }
}

function game() {

    for (counter = 1; counter < 6; counter++){
        let userInput = prompt("Rock, Paper or Scissor?:");
        gameRPS(userInput);     
    }
    

    // if (userScore == computerScore){
    //     console.log("It is a tie");
    // } else if (userScore > computerScore){
    //     console.log("You lost!");
    // } else {
    //     console.log("You won!");
    // }
    // finalScore = `User score: ${userScore} Computer Score ${computerScore}`;
    // console.log(finalScore);
}

game();