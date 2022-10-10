let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

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

    let container = document.getElementById('container');
    let para = document.createElement('p');
    container.appendChild(para);
    let results;
    
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'rock') {
            
            playerScore += 1;
           
            results = document.createTextNode(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}. You win!`);
            para.appendChild(results);

    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
               playerSelection === 'scissors' && computerSelection === 'rock' ||
               playerSelection === 'paper' && computerSelection === 'scissors') {
                    
                    computerScore += 1;
                    
                    results = document.createTextNode(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}. You lose!`);
                    para.appendChild(results);
    } else {
        results = document.createTextNode(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}. It's a tie!`);
        para.appendChild(results);
    }

    rounds += 1;

    updateScore();
}

function updateScore() {
    let game = document.getElementById('game');
    let h2 = document.createElement('h2');
    let content;

    let pScore = document.getElementById('playerScore');
    let divPScore = document.createElement('div');
    let pnumber;
    
    let cScore = document.getElementById('computerScore');
    let divCScore = document.createElement('div');
    let cnumber;

    if (rounds === 1) {
        game.appendChild(h2);
        content = document.createTextNode(`Round ${rounds} of 5`);
        h2.appendChild(content);

        pScore.appendChild(divPScore);
        pnumber = document.createTextNode(` ${playerScore}`);
        divPScore.appendChild(pnumber);

        cScore.appendChild(divCScore);
        cnumber = document.createTextNode(` ${computerScore}`);
        divCScore.appendChild(cnumber);
    } else {
        game.removeChild(game.querySelector('h2'));
        game.appendChild(h2);
        content = document.createTextNode(`Round ${rounds} of 5`);
        h2.appendChild(content);

        pScore.removeChild(pScore.querySelector('div'));
        pScore.appendChild(divPScore);
        pnumber = document.createTextNode(` ${playerScore}`);
        divPScore.appendChild(pnumber);

        cScore.removeChild(cScore.querySelector('div'));
        cScore.appendChild(divCScore);
        cnumber = document.createTextNode(` ${computerScore}`);
        divCScore.appendChild(cnumber);
    }


    }

// // function game() {
// //     for (let i = 0; i < 5; i++) {
// //         playerSelection = prompt(`Round ${i + 1} of 5 :: Choose Rock, Paper or Scissors!`).toLowerCase();
// //         if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
// //             playerScore = 0; 
// //             computerScore = 0;
// //             return console.log("That's not a valid choice.");
// //         } else {
// //             computerSelection = getComputerChoice();
// //             console.log(`Round ${i + 1}`);
// //             playRound();
// //         }
// //     }
// // }
    
// function finalScore() {        
//         if (playerScore === 0 && computerScore === 0) {
//             return console.log("Reload the page to try again.");
//         } else if (playerScore > computerScore) {
//             return console.log(`You won the game by ${playerScore} to ${computerScore}!`);
//         } else if (playerScore < computerScore) {
//             return console.log(`You lost the game by ${computerScore} to ${playerScore}!`);
//         } else if (playerScore === computerScore) {
//             return console.log("The game ended in a tie!");
//         }
//     }

// function (string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// game();
// finalScore();