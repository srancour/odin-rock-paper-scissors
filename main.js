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
// getComputerChoice();
// END Computer decides on choice

// START Human decides on choice
function getHumanChoice () {
    // DISPLAY "Rock, paper, or scissors?"
    // GET Human choice
    let humanChoice = prompt("Rock, paper, or scissors");
    // SET humanChoice to lower case so no matter what a user puts in, it will work
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
// getHumanChoice();
// END Human decides on a choice
// SET variables for human score and computer score to track
// SET current scores to 0
let humanScore = 0;
let computerScore = 0;

// START playRound function that takes human choice and computer choice as parameters
// IF human choice is rock and computer choice is rock THEN
//  PRINT "You tie! Rock ties with Rock"
// ELSE IF human choice is rock and computer choice is paper THEN
//  PRINT "You lose! Paper covers Rock"
//  INCREMENT computer score
// ELSE IF human choice is rock and computer choice is scissors THEN
//  PRINT "You win! Rock crushes Scissors"
//  INCREMENT human score
// ELSE IF human choice is paper and computer choice is rock THEN
//  PRINT "You win! Paper covers Rock"
//  INCREMENT human score
// ELSE IF human choice is paper and computer choice is paper THEN
//  PRINT "You tie! Paper ties with Paper"
// ELSE IF human choice is paper and computer choice is scissors THEN
//  PRINT "You lose! Scissors cut Paper"
//  INCREMENT computer score
// ELSE IF human choice is scissors and computer choice is rock THEN
//  PRINT "You lose! Rock crushes Scissors"
//  INCREMENT computer score
// ELSE IF human choice is scissors and computer choice is paper THEN
//  PRINT "You win! Scissors cut Paper"
//  INCREMENT human score
// ELSE IF human choice is scissors and computer choice is scissors THEN
//  PRINT "You tie! Scissors ties with Scissors"
// ELSE
//  PRINT "Something went wrong"
// ENDIF
// END playRound function
// SET variable humanSelection to run the get human choice function
// SET variable computerSelection to run the get computer choice function
// CALL playRound function with humanSelection and computerSelection 