const paperBtn = document.querySelector('#paper');
const sissorsBtn = document.querySelector('#sissors');
const rockBtn = document.querySelector('#rock');
const body = document.querySelector('body');

const result = document.createElement('div');
const textComputerChoice = document.createElement('p');
const textHumanChoice = document.createElement('p');
const textResult = document.createElement('p');
const score = document.createElement('p');
const gameResult = document.createElement('p');

function getComputerChoice(max) {
    const computerChoice = Math.floor(Math.random() * max);
    if (computerChoice == 0) {
        return 'paper'
    } else if (computerChoice == 1) {
        return 'rock'
    } else {
        return 'sissors'
    };
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        textComputerChoice.textContent = `Computer choice: ${computerChoice}`;
        textHumanChoice.textContent = `Your choice: ${humanChoice}`;
    
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
        };
    };
    
    paperBtn.addEventListener('click', () => {
        const roundResult = playRound('paper', getComputerChoice(3));
        textResult.textContent = roundResult;
        score.textContent = `Your score is: ${humanScore}, and computers score is: ${computerScore}.`
        if (roundResult === 'You win!') {
            humanScore++;
        } else if (roundResult === 'You lose!') {
            computerScore++;
        } else;
        if (humanScore == 0) {
            return 'YOU WON THE GAME';
        } else if (computerScore == 5) {
            return 'YOU LOSE THE GAME';
        } else;
    });
    
    sissorsBtn.addEventListener('click', () => {
        const roundResult = playRound('sissors', getComputerChoice(3));
        textResult.textContent = roundResult;
        score.textContent = `Your score is: ${humanScore}, and computers score is: ${computerScore}.`
        if (roundResult === 'You win!') {
            humanScore++;
        } else if (roundResult === 'You lose!') {
            computerScore++;
        } else;   
        if (humanScore == 5) {
            return 'YOU WON THE GAME';
        } else if (computerScore == 5) {
            return 'YOU LOSE THE GAME';
        } else;     
    });
    
    rockBtn.addEventListener('click', () => {
        const roundResult = playRound('rock', getComputerChoice(3));
        textResult.textContent = roundResult;
        score.textContent = `Your score is: ${humanScore}, and computers score is: ${computerScore}.`
        if (roundResult === 'You win!') {
            humanScore++;
        } else if (roundResult === 'You lose!') {
            computerScore++;
        } else;    
        if (humanScore == 5) {
            return 'YOU WON THE GAME';
        } else if (computerScore == 5) {
            return 'YOU LOSE THE GAME';
        } else;   
    });
    
}

console.log(playGame());
result.appendChild(gameResult)
result.appendChild(textComputerChoice);
result.appendChild(textHumanChoice);
result.appendChild(textResult);
result.appendChild(score);
body.appendChild(result);