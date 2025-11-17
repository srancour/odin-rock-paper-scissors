const log = console.log;
// log("Hello World");

// START Computer decides on choice
function getComputerChoice() {
    // COMPUTE randomly 1, 2, or 3 for computer's choice
    // SET variable to computer's choice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    log(computerChoice);
// IF choice is 1 THEN
//  SET variable to "rock"
// ELSE IF choice is 2 THEN
//  SET variable to "paper"
// ELSE IF choice is 3 THEN
//  SET variable to "scissors"
// ELSE
//  PRINT warning
// ENDIF
}
// CALL computer choice function
getComputerChoice();
// END Computer decides on choice