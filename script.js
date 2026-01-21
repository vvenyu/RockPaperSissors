
function getComputerChoice(max) {
    return Math.floor(Math.random() * 3);
}

const computerChoice = getComputerChoice(3);
if (computerChoice == 0) {
    console.log('paper');
} else if (computerChoice == 1) {
    console.log('rock');
} else {
    console.log('sissors');
}