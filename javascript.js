function getComputerChoice() {
     const computerChoice = Math.floor(Math.random() * 3);
     return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    roundMatrix = [
        ['Tie', 'You Lose! Paper beats Rock', 'You Win! Rock beats Scissors'],
        ['You Win! Paper beats Rock', 'Tie', 'You Lose! Scissors beats Paper'],
        ['You Lose! Rock beats Scissors', 'You Win! Scissors beats Paper', 'Tie']
    ];
    
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock')
        playerSelection = 0;
    else if(playerSelection === 'paper')
        playerSelection = 1;
    else if(playerSelection === 'scissors')
        playerSelection = 2;

    roundWinner = roundMatrix[playerSelection][computerSelection];
    return roundWinner;
}

function game() {
    for(let i = 0; i < 5; ++i) {
        const playerSelection = prompt('Rock Paper Scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));   
    }
}

game();