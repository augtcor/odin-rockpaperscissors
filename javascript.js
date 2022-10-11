let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let container;
let game;
let pScore;
let cScore;
let finalScore;
let buttonsDiv;

let buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click', playRound);
    });

function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random()*choiceArray.length);
    return choiceArray[choiceIndex];
}

function playRound() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();

    container = document.getElementById('container');
    let para = document.createElement('p');
    container.appendChild(para);
    let results;
    
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'rock') {
            
            playerScore += 1;
            
            if (rounds === 0) {
                results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. You win!`);
                para.appendChild(results);
            } else {
                container.removeChild(container.querySelector('p'));
                container.appendChild(para);
                results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. You win!`);
                para.appendChild(results);
            }

    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
               playerSelection === 'scissors' && computerSelection === 'rock' ||
               playerSelection === 'paper' && computerSelection === 'scissors') {
                    
                    computerScore += 1;
                    
                    if (rounds === 0) {
                        results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. You lose!`);
                        para.appendChild(results);
                    } else {
                        container.removeChild(container.querySelector('p'));
                        container.appendChild(para);
                        results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. You lose!`);
                        para.appendChild(results);
                    }
    } else {
        if (rounds === 0) {
            results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. It's a tie!`);
            para.appendChild(results);
        } else {
            container.removeChild(container.querySelector('p'));
            container.appendChild(para);
            results = document.createTextNode(`You chose ${capitalize(playerSelection)} and your opponent chose ${capitalize(computerSelection)}. It's a tie!`);
            para.appendChild(results);
        }
    }

    rounds += 1;

    updateScore();
}

function updateScore() {
    game = document.getElementById('game');
    let h2 = document.createElement('h2');
    let content;

    pScore = document.getElementById('playerScore');
    let divPScore = document.createElement('div');
    let pnumber;
    
    cScore = document.getElementById('computerScore');
    let divCScore = document.createElement('div');
    let cnumber;

    if (rounds === 1) {
        game.appendChild(h2);
        content = document.createTextNode(`Round ${rounds} of 5`);
        h2.appendChild(content);

        pScore.appendChild(divPScore);
        pnumber = document.createTextNode(`${playerScore}`);
        divPScore.appendChild(pnumber);

        cScore.appendChild(divCScore);
        cnumber = document.createTextNode(`${computerScore}`);
        divCScore.appendChild(cnumber);
    } else {
        game.removeChild(game.querySelector('h2'));
        game.appendChild(h2);
        content = document.createTextNode(`Round ${rounds} of 5`);
        h2.appendChild(content);

        pScore.removeChild(pScore.querySelector('div'));
        pScore.appendChild(divPScore);
        pnumber = document.createTextNode(`${playerScore}`);
        divPScore.appendChild(pnumber);

        cScore.removeChild(cScore.querySelector('div'));
        cScore.appendChild(divCScore);
        cnumber = document.createTextNode(`${computerScore}`);
        divCScore.appendChild(cnumber);
    }

    if (rounds >= 5) {
        finalScore = document.getElementById('finalScore');
        let finalScorePara = document.createElement('h3');
        finalScore.appendChild(finalScorePara);
        
        if (playerScore > computerScore) { 
            let finalScoreContent = document.createTextNode(`You won the game!`);
            finalScorePara.appendChild(finalScoreContent);
        } else if (playerScore < computerScore) {
            let finalScoreContent = document.createTextNode(`You lost the game!`);
            finalScorePara.appendChild(finalScoreContent);
        } else if (playerScore === computerScore) {
            let finalScoreContent = document.createTextNode("The game ended in a tie!");
            finalScorePara.appendChild(finalScoreContent);
        }

        endGame();
    }
}

function endGame() {
    buttons.forEach(button => {
        button.disabled = true;            
        });
        
    buttonsDiv = document.getElementById('buttons');
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    buttonsDiv.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
    }

function restartGame() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    buttonsDiv.removeChild(buttonsDiv.lastChild);
    container.removeChild(container.querySelector('p'));
    game.removeChild(game.querySelector('h2'));
    pScore.removeChild(pScore.querySelector('div'));
    cScore.removeChild(cScore.querySelector('div'));
    finalScore.removeChild(finalScore.querySelector('h3'));
    buttons.forEach(button => {
        button.disabled = false;            
        });
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}