
function getComputerChoice(max) {
    const computerChoice = Math.floor(Math.random() * max);
    if (computerChoice == 0) {
        return 'paper'
    } else if (computerChoice == 1) {
        return 'rock'
    } else {
        return 'sissors'
    }
}

function getHumanChoice() {
    const humanChoice = prompt('What is your choice?');
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);
