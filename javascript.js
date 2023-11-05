const gameArrayChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*gameArrayChoices.length);
    const computerChoice = String(gameArrayChoices[randomChoice]);
    return computerChoice;
}

getComputerChoice();