// Initialize scores
let userScore = 0;
let computerScore = 0;

// Store display div's in variables
let currentResults = document.querySelector("#current");
let userScoreDisplay = document.querySelector("#usrscore");
let computerScoreDisplay = document.querySelector("#cmpscore");
let finalScoreDisplay = document.querySelector("#finalscore");

// Function to have computer generate Rock, Paper or Scissors
let getComputerChoice = function(){
    let randomNumber = Math.random()*3
    if (randomNumber < 1) {
        let computerChoice = "Rock";
        return computerChoice;
    } else if (randomNumber > 2) {
        let computerChoice = "Scissors";
        return computerChoice;
    } else {
        let computerChoice = "Paper";
        return computerChoice;
    };
};

// Function to display scores
let displayScores = function(){
    userScoreDisplay.textContent = `Your score is: ${userScore}`;
        computerScoreDisplay.textContent = `The computer score is: ${computerScore}`;

        if (userScore >=3){
            console.log("You won 3 out of 5, congrats! Click the reset button to play another time.");
            finalScoreDisplay.textContent = "You won 3 out of 5, congrats! Click the reset button to play another time.";
        };

        if (computerScore >=3){
            console.log("The computer beat you 3 out of 5, better luck next time! Click the reset button to play another time.");
            finalScoreDisplay.textContent = "The computer beat you 3 out of 5, better luck next time! Click the reset button to play another time.";
        };
};

// Function to reset game
let resetGame = function(){
    userScore = 0;
    computerScore = 0;
    currentResults.textContent = "";
    userScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    finalScoreDisplay.textContent = "";
};

// User selects Rock
let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    if (userScore < 3 && computerScore < 3){
        let userChoice = "Rock";
        let computerChoice = getComputerChoice();

        if (computerChoice == "Paper"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You lost.`;
            computerScore++;
        } else if (computerChoice == "Scissors"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You won!`;
            userScore++;
        } else {
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            It's a tie...`;
        };

        displayScores();
    };
});

// User selects Paper
let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () =>{
    if (userScore < 3 && computerScore < 3){
        let userChoice = "Paper";
        let computerChoice = getComputerChoice();

        if (computerChoice == "Scissors"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You lost.`;
            computerScore++;
        } else if (computerChoice == "Rock"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You won!`;
            userScore++;
        } else {
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            It's a tie...`;
        };

        displayScores();
    };
});

// User selects Rock
let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () =>{
    if (userScore < 3 && computerScore < 3){
        let userChoice = "Scissors";
        let computerChoice = getComputerChoice();

        if (computerChoice == "Rock"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You lost.`;
            computerScore++;
        } else if (computerChoice == "Paper"){
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            You won!`;
            userScore++;
        } else {
            currentResults.textContent = `You selected ${userChoice}.
            The computer selected ${computerChoice}.
            It's a tie...`;
        };

        displayScores();
    };
});

// Allow user to reset game after 3 out of 5
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    if (userScore >= 3 || computerScore >= 3){
    resetGame();
    };
});