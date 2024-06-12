const choice = ["rock", "paper", "scissors"];

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const lblPlayerChoice = document.getElementById("playerChoice");
const lblComputerChoice = document.getElementById("computerChoice");
const lblResult = document.getElementById("gameResult");
const lblPlayerScore = document.getElementById("playerScore");
const lblComputerScore = document.getElementById("computerScore");

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function playGame() {
    if (playerScore < 3 && computerScore < 3) {
        computerChoice = choice[Math.floor(Math.random() * 3)];
        lblPlayerChoice.textContent = "PLAYER: " + playerChoice;
        lblComputerChoice.textContent = "Computer: " + computerChoice;

        if (playerChoice === computerChoice) {
            lblResult.textContent = "It is a tie!";
        } 
        else if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                lblResult.textContent = "Computer Win!";
                computerScore++;
            } else {
                lblResult.textContent = "Player Win!";
                playerScore++;
            }
        } 
        else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                lblResult.textContent = "Computer Win!";
                computerScore++;
            } else {
                lblResult.textContent = "Player Win!";
                playerScore++;
            }
        } 
        else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                lblResult.textContent = "Computer Win!";
                computerScore++;
            } else {
                lblResult.textContent = "Player Win!";
                playerScore++;
            }
        }

        lblPlayerScore.textContent = "Player Score: " + playerScore;
        lblComputerScore.textContent = "Computer Score: " + computerScore;

        if (playerScore === 3) {
            lblResult.textContent = "Player wins the game!";
        } 
        else if (computerScore === 3) {
            lblResult.textContent = "Computer wins the game!";
        }

        playerChoice = "";
        computerChoice = "";
    }
}

btnRock.addEventListener('click', function () {
    playerChoice = "rock";
    playGame();
});

btnPaper.addEventListener('click', function () {
    playerChoice = "paper";
    playGame();
});

btnScissors.addEventListener('click', function () {
    playerChoice = "scissors";
    playGame();
});
