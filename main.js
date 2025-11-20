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
        if (computerChoice === "rock") {
            log("You tie! Rock ties with Rock");
        } else if (computerChoice === "paper") {
            log("You lose! Paper covers Rock");
            computerScore++;
        } else if (computerChoice === "scissors") {
            log("You win! Rock crushes Scissors");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            log("You win! Paper covers Rock");
            humanScore++;
        } else if (computerChoice === "paper") {
            log("You tie! Paper ties with Paper");
        } else if (computerChoice === "scissors") {
            log("You lose! Scissors cut Paper")
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            log("You lose! Rock crushes Scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            log("You win! Scissors cut Paper");
            humanScore++;
        } else if (computerChoice === "scissors") {
            log("You tie! Scissors ties with Scissors");
        }
    } else {
        //  In case something goes wrong
        log("Something went wrong!");
    }
    log(`Current score: You ${humanScore} / Computer ${computerScore}`);
}


// Function to play the game with a certain number of rounds defaulted to 5
function playGame(rounds = 5) {
    let i = 0;
    while (i < rounds) {
        // Call the choice functions each time to get new choices
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
}

// CALL playGame function
playGame();