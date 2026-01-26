// To shorten log command later on
const log = console.log;

// Function to get a random choice from the computer from 1-3
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // Set option to text version of choice (1=rock 2=paper 3=scissors) and return it
    if (computerChoice === 1){
        computerChoice = "rock";
        return computerChoice;
    } else if (computerChoice === 2){
        computerChoice = "paper";
        return computerChoice;
    } else if (computerChoice === 3){
        computerChoice = "scissors";
        return computerChoice;
    } else {
        // In case anything goes wrong
        console.warn("Number out of bounds");
    }
}

// Function to get choice from the human
function getHumanChoice () {
    let humanChoice = prompt("Rock, paper, or scissors");
    // Set option to lower case to make it so no matter casing from the human will be processed
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        // If the human chooses something that's not an option, ask again
        humanChoice = prompt("Not a valid choice. Rock, paper, or scissors");
    }
}

let humanScore = 0;
let computerScore = 0;

// Function to play a single round of rock, paper, scissors, displays results, and adds to score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        // Checks each option when the human chooses rock
        if (computerChoice === "rock") {
            choicePara.textContent = "You tie! Rock ties with Rock";
            results.append(choicePara);
        } else if (computerChoice === "paper") {
            choicePara.textContent = "You lose! Paper covers Rock";
            results.append(choicePara);
            computerScore++;
        } else if (computerChoice === "scissors") {
            choicePara.textContent = "You win! Rock crushes Scissors";
            results.append(choicePara);
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        // Checks each option when the human chooses paper
        if (computerChoice === "rock") {
            choicePara.textContent = "You win! Paper covers Rock";
            results.append(choicePara);
            humanScore++;
        } else if (computerChoice === "paper") {
            choicePara.textContent = "You tie! Paper ties with Paper";
            results.append(choicePara);
        } else if (computerChoice === "scissors") {
            choicePara.textContent = "You lose! Scissors cut Paper";
            results.append(choicePara);
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        // Checks each option when the human chooses scissors
        if (computerChoice === "rock") {
            choicePara.textContent = "You lose! Rock crushes Scissors";
            results.append(choicePara);
            computerScore++;
        } else if (computerChoice === "paper") {
            choicePara.textContent = "You win! Scissors cut Paper";
            results.append(choicePara);
            humanScore++;
        } else if (computerChoice === "scissors") {
            choicePara.textContent = "You tie! Scissors ties with Scissors";
            results.append(choicePara);
        }
    } else {
        //  In case something goes wrong
        choicePara.textContent = "Something went wrong!";
        results.append(choicePara);
    }
    
    resultsPara.textContent = `Current score: You ${humanScore} / Computer ${computerScore}`;
    results.append(resultsPara);
    
    if (computerScore == 5) {
        scorePara.textContent = "The computer won. Good luck next time.";
        results.append(scorePara);
        computerScore = 0;
        humanScore = 0;
    } else if (humanScore == 5) {
        scorePara.textContent = "You won! Great job!";
        results.append(scorePara);
        computerScore = 0;
        humanScore = 0;
    } else {
        scorePara.textContent = "";
        results.append(scorePara);
    }
}


// Function to play the game with a certain number of rounds defaulted to 5
function playGame(humanSelection) {
    // let i = 0;
    // while (i < rounds) {
        // Call the choice functions each time to get new choices
        // let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        // i++;
    // }
}

// CALL playGame function
// playGame();

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const results = document.getElementById("results");

const choicePara = document.createElement("p");
const resultsPara = document.createElement("p");
const scorePara = document.createElement("p");

rockButton.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(rockButton.id);
});

paperButton.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(paperButton.id);
});

scissorsButton.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(scissorsButton.id);
});