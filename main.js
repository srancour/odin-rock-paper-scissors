const log = console.log;
// log("Hello World");

// START Computer decides on choice
function getComputerChoice() {
    // COMPUTE randomly 1, 2, or 3 for computer's choice
    // SET variable to computer's choice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // log(computerChoice);
    // IF choice is 1 THEN
    if (computerChoice === 1){
        //  SET variable to "rock"
        computerChoice = "rock";
    } // ELSE IF choice is 2 THEN
    else if (computerChoice === 2){
        //  SET variable to "paper"
        computerChoice = "paper";
    } // ELSE IF choice is 3 THEN
    else if (computerChoice === 3){
        //  SET variable to "scissors"
        computerChoice = "scissors";
    } // ELSE
    else {
        //  PRINT warning
        console.warn("Number out of bounds");
    } // ENDIF
    log(computerChoice);
}
// CALL computer choice function
getComputerChoice();
// END Computer decides on choice

// START Human decides on choice
function getHumanChoice () {
    // DISPLAY "Rock, paper, or scissors?"
    // GET Human choice
    let humanChoice = prompt("Rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    // IF Human choice is rock, paper, or scissors THEN move on
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {

    } // ELSE DISPLAY "Not a valid choice. Rock, paper, or scissors"
    else {
        // GET Human choice
        humanChoice = prompt("Not a valid choice. Rock, paper, or scissors");
    }
}
// CALL human choice function
getHumanChoice();
// END Human decides on a choice
// SET variables for human score and computer score to track
// SET current scores to 0
let humanScore = 0;
let computerScore = 0;