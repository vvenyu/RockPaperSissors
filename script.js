
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
    console.log(`Computers choice: ${computerChoice}`);
    console.log(`Your choice: ${humanChoice}`);

    if (humanChoice == computerChoice) {
        return 'Its a Draw!'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return 'You win!';
    } else if (humanChoice == 'rock' && computerChoice == 'sissors') {
        return 'You win!';
    } else if (humanChoice == 'sissors' && computerChoice == 'paper') {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice(3);

function playGame() {
    playRound(humanSelection, computerSelection);
}

playGame();
