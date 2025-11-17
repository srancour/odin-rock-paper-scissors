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
// DISPLAY "Rock, paper, or scissors?"
// GET Human choice
// IF Human choice is rock THEN
//  SET variable to "rock"
// ELSE IF Human choice is paper THEN
//  SET variable to "paper"
// ELSE IF Human choice is scissors THEN
//  SET variable to "scissors"
// ELSE
//  DISPLAY "Not a valid choice."