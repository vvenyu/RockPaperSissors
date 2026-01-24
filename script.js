
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


function playGame() {
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

    let humanScore = 0;
    let computerScore = 0;
    
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice(3);
    let gameResult = playRound(humanSelection, computerSelection);
    console.log(gameResult);

    if (gameResult == 'You win!') {
        humanScore++;
    } else if(gameResult == 'Its a Draw!') {
    
    } else {
        computerScore++;
    }

    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice(3);
    gameResult = playRound(humanSelection, computerSelection);
    console.log(gameResult);

    if (gameResult == 'You win!') {
        humanScore++;
    } else if(gameResult == 'Its a Draw!') {
    
    } else {
        computerScore++;
    }

    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice(3);
    gameResult = playRound(humanSelection, computerSelection);
    console.log(gameResult);

    if (gameResult == 'You win!') {
        humanScore++;
    } else if(gameResult == 'Its a Draw!') {
    
    } else {
        computerScore++;
    }

    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice(3);
    gameResult = playRound(humanSelection, computerSelection);
    console.log(gameResult);

    if (gameResult == 'You win!') {
        humanScore++;
    } else if(gameResult == 'Its a Draw!') {
    
    } else {
        computerScore++;
    }

    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice(3);
    gameResult = playRound(humanSelection, computerSelection);
    console.log(gameResult);

    if (gameResult == 'You win!') {
        humanScore++;
    } else if(gameResult == 'Its a Draw!') {
    
    } else {
        computerScore++;
    }
    
    console.log(`Your score is: ${humanScore}, and computers score is: ${computerScore}.`);

    if (humanScore > computerScore) {
        return 'YOU WON THE GAME!!';
    } else if (humanScore == computerScore) {
        return 'ITS A DRAW!!'
    } else {
        return 'YOU LOSE THE GAME!!'
    }
}

console.log(playGame());
