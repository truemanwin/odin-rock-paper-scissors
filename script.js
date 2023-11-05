const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const winnerDiv = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if(playerScore === 5 || computerScore === 5)
            resetGame();
        else {
            updateScore(roundResult);
            updateResultText(roundResult);
            checkWinner();
        }
    });
});

function getComputerChoice() {
     const computerChoice = Math.floor(Math.random() * 3);
     return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const roundMatrix = [
        ['Tie', 'You lost this round! Paper beats Rock', 'You win this round! Rock beats Scissors'],
        ['You win this round! Paper beats Rock', 'Tie', 'You lost this round! Scissors beats Paper'],
        ['You lost this round! Rock beats Scissors', 'You win this round! Scissors beats Paper', 'Tie']
    ];
    
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock')
        playerSelection = 0;
    else if(playerSelection === 'paper')
        playerSelection = 1;
    else if(playerSelection === 'scissors')
        playerSelection = 2;

    roundResult = roundMatrix[playerSelection][computerSelection];
    return roundResult;
}

function updateScore(roundResult) {
    const result = roundResult.substr(0, 8);
    if(result === 'You win ')
        ++playerScore;
    else if(result === 'You lost')
        ++computerScore;
    scoreDiv.firstElementChild.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
}

function updateResultText(roundResult) {
    resultDiv.firstElementChild.textContent = `${roundResult}`;
}

function checkWinner() {
    if(playerScore === 5) {
        winnerDiv.textContent = 'Congratulations! You win the game!';
        return true;
    }
    else if(computerScore === 5) {
        winnerDiv.textContent = 'Computer wins the game. Try again!';
        return true;
    }
    return false;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.firstElementChild.textContent = 'Player: 0 | Computer: 0';
    resultDiv.firstElementChild.textContent = 'Make your choice to start the game!'
    winnerDiv.textContent = '';
} 