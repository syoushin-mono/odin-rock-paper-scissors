const ROUND_WIN = "win";
const ROUND_LOSE = "lose";
const ROUND_DRAW = "draw";
const ROUND_INDETERMINATE = "indeterminate";
const GAME_LENGTH = 5;  // in rounds

/**
 * Randomly selects the hand sign that the computer throws out
 * (rock, paper, scissors).
 * @returns {String} The 'hand' that the computer decides to throw.
 */ 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

/**
 * Prompts the user to provide their selection. Note that the 
 * function will not check for the validity of the user's
 * response.
 * @returns {string} The user input.
 */
function getHumanChoice() {
    return prompt("Rock, paper, scissors...").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let elapsedRounds = 0;

/**
 * Processes the human and computer choices to determine
 * the winner.
 * @param humanChoice {string} The choice the user made.
 * @param computerChoice {string} The choice the computer made.
 * @returns {string} The result of the match from the user's perspective (win, lose, draw).
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ROUND_DRAW;
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            return ROUND_WIN;
        } else {
            return ROUND_LOSE;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return ROUND_WIN;
        } else {
            return ROUND_LOSE;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            return ROUND_WIN;
        } else {
            return ROUND_LOSE;
        }
    } else {  // Runs only if an invalid string is entered.
        return ROUND_INDETERMINATE;
    }
}

/**
 * Returns the current point counter in a formatted matter 
 * of the player and computer in that order.
 * @returns {string} The formatted score.
 */
function getCurrentPoints() {
    return `(Human: ${humanScore}/ Computer: ${computerScore})`;
}

/**
 * Begins the rock-paper-scissors game loop.
 */
function playGame() {
    while (elapsedRounds < GAME_LENGTH) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result === ROUND_WIN) {
            humanScore++;
            console.log(`Human wins round ${elapsedRounds + 1}! ` + getCurrentPoints());
            
        } else if (result === ROUND_LOSE) {
            computerScore++;
            console.log(`Computer wins round ${elapsedRounds + 1}! ` + getCurrentPoints());
        } else if (result === ROUND_DRAW) {
            console.log(`Round ${elapsedRounds + 1} ends in a draw! ` + getCurrentPoints());
        } else {
            console.log(`A winner could not be determined. Reattempting round ${elapsedRounds + 1}.`);
        }

        if (result !== ROUND_INDETERMINATE) {
            elapsedRounds++;
        }
    }
}

/**
 * Runs upon the completion of the game, tallying up final scores and
 * printing the results into the console.
 */
function endGame() {
    console.log("Final tallies: " + getCurrentPoints());
    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
endGame();
