let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click', getPlayerChoice);
});

function getPlayerChoice() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();
    playRound();
}

function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random()*choiceArray.length);
    return choiceArray[choiceIndex];
}

function playRound() {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            return console.log(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}.`, '\n', 'You win!', '\n', `${(playerSelection)} beats ${(computerSelection)}.`); 
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
               playerSelection === 'scissors' && computerSelection === 'rock' ||
               playerSelection === 'paper' && computerSelection === 'scissors') {
                    computerScore += 1;
                    return console.log(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}.`, '\n', 'You lose!', '\n', `${(computerSelection)} beats ${(playerSelection)}.`);
    } else {
        return console.log(`You chose ${(playerSelection)} and your opponent chose ${(computerSelection)}.`, '\n', "It's a tie!");
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