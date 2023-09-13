let result = 0;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let userChoiceElement = document.querySelector('#user-choice');
let computerChoiceElement = document.querySelector('#computer-choice');
let resultsElement = document.querySelector('#result-message');

let playerScoreElement = document.querySelector('#player-score')
let computerScoreElement = document.querySelector('#computer-score')


function updateScore () {
    playerScoreElement.textContent = `Your score: ${playerScore}`
    computerScoreElement.textContent = `Computer score: ${computerScore}`
}

function checkGameOver () {
    if(playerScore === 5) {
        gameOver = true;
        resultsElement.textContent = 'Game over. You win!'
        showEndgameModal('Game over. You Win!')
    }
    if(computerScore === 5) {
        gameOver = true;
        resultsElement.textContent = 'Game over. You lose!'
        showEndgameModal('Game over. You lose!')
    }

    if(gameOver) {
        rock.style.display = none;
        paper.style.display = none;
        scissors.style.display = none;
    }
}

function getComputerChoice () {
    const array = ['rock','paper','scissors']
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}
function theWinner(player,computer) {
    if(player === computer) {
        return 'Its a tie!'
    }
    if( player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock'    ||
        player === 'scissors' && computer === 'paper') {
        playerScore ++;
        updateScore();
        checkGameOver();
        return 'You Win!'
        }
        computerScore++;
        updateScore()
        checkGameOver()
        return 'You Lose!'
}
function game(player) {
    if(gameOver) {
        return;
    }
    userChoiceElement.textContent = `You choice: ${player}`
    const computerChoice = getComputerChoice();
    computerChoiceElement.textContent = `Computer choice: ${computerChoice}`
    result = theWinner(player,computerChoice)
    resultsElement.textContent = `Result: ${result}`
}
rock.addEventListener('click',() => game('rock'))
paper.addEventListener('click',() => game('paper'))
scissors.addEventListener('click',() => game('scissors'))

updateScore();


const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const restartBtn = document.getElementById('restartBtn');

function showEndgameModal(message) {
  endgameMsg.textContent = message;
  endgameModal.classList.add('active');
}

function hideEndgameModal() {
  endgameModal.classList.remove('active');
}

function restartGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    userChoiceElement.textContent = 'Your Choice: undefined';
    computerChoiceElement.textContent = "Computer's Choice: undefined";
    resultsElement.textContent = 'Result: undefined';
    updateScore();
    rock.style.display = '';
    paper.style.display = '';
    scissors.style.display = '';
    hideEndgameModal();
  }

restartBtn.addEventListener('click', restartGame);

