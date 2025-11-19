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
        // PRINT computerChoice
        log(computerChoice);
        // RETURN computerChoice
        return computerChoice;
    } // ELSE IF choice is 2 THEN
    else if (computerChoice === 2){
        //  SET variable to "paper"
        computerChoice = "paper";
        // PRINT computerChoice
        log(computerChoice);
        // RETURN computerChoice
        return computerChoice;
    } // ELSE IF choice is 3 THEN
    else if (computerChoice === 3){
        //  SET variable to "scissors"
        computerChoice = "scissors";
        // PRINT computerChoice
        log(computerChoice);
        // RETURN computerChoice
        return computerChoice;
    } // ELSE
    else {
        //  PRINT warning
        console.warn("Number out of bounds");
    } // ENDIF
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
        // RETURN humanChoice
        return humanChoice;
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
function playRound(humanChoice, computerChoice) {
// IF human choice is rock THEN
    if (humanChoice === "rock") {
        // IF computer choice is rock THEN
        if (computerChoice === "rock") {
            //  PRINT "You tie! Rock ties with Rock"
            log("You tie! Rock ties with Rock");
        } // ELSE IF computer choice is paper THEN
        else if (computerChoice === "paper") {
            //  PRINT "You lose! Paper covers Rock"
            log("You lose! Paper covers Rock");
            //  INCREMENT computer score
            computerScore++;
        } // ELSE IF computer choice is scissors THEN
        else if (computerChoice === "scissors") {
            //  PRINT "You win! Rock crushes Scissors"
            log("You win! Rock crushes Scissors");
            //  INCREMENT human score
            humanScore++;
        }
        //ENDIF
    } // ELSE IF human choice is paper THEN
    else if (humanChoice === "paper") {
        // IF computer choice is rock THEN
        if (computerChoice === "rock") {
            //  PRINT "You win! Paper covers Rock"
            log("You win! Paper covers Rock");
            //  INCREMENT human score
            humanScore++;
        } // ELSE IF computer choice is paper THEN
        else if (computerChoice === "paper") {
            //  PRINT "You tie! Paper ties with Paper"
            log("You tie! Paper ties with Paper");
        } // ELSE IF computer choice is scissors THEN
        else if (computerChoice === "scissors") {
            //  PRINT "You lose! Scissors cut Paper"
            log("You lose! Scissors cut Paper")
            //  INCREMENT computer score
            computerScore++;
        }
        //ENDIF
    } // ELSE IF human choice is scissors THEN
    else if (humanChoice === "scissors") {
        // IF computer choice is rock THEN
        if (computerChoice === "rock") {
            //  PRINT "You lose! Rock crushes Scissors"
            log("You lose! Rock crushes Scissors");
            //  INCREMENT computer score
            computerScore++;
        } // ELSE IF computer choice is paper THEN
        else if (computerChoice === "paper") {
            //  PRINT "You win! Scissors cut Paper"
            log("You win! Scissors cut Paper");
            //  INCREMENT human score
            humanScore++;
        } // ELSE IF computer choice is scissors THEN
        else if (computerChoice === "scissors") {
            //  PRINT "You tie! Scissors ties with Scissors"
            log("You tie! Scissors ties with Scissors");
        }
        //ENDIF
    } // ELSE
    else {
        //  PRINT "Something went wrong!"
        log("Something went wrong!");
    }
    // ENDIF
    // PRINT current score
    log(`Current score: You ${humanScore} / Computer ${computerScore}`);
}
// END playRound function

// SET variable humanSelection to run the get human choice function
let humanSelection = getHumanChoice();
// SET variable computerSelection to run the get computer choice function
let computerSelection = getComputerChoice();
// CALL playRound function with humanSelection and computerSelection
playRound(humanSelection, computerSelection);

