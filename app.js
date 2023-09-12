let result = 0;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let userChoiceElement = document.querySelector('#user-choice');
let computerChoiceElement = document.querySelector('#computer-choice');
let resultsElement = document.querySelector('#result-message');

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
            return 'You Win!'
        }
        return 'You Lose!'
}
function game(player) {
    userChoiceElement.textContent = `You choice ${player}`
    const computerChoice = getComputerChoice();
    computerChoiceElement.textContent = `Computer choice ${computerChoice}`
    result = theWinner(player,computerChoice)
    resultsElement.textContent = `Result: ${result}`
}
rock.addEventListener('click',() => game('rock'))
paper.addEventListener('click',() => game('paper'))
scissors.addEventListener('click',() => game('scissors'))