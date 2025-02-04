// Initialize scores
let userScore = 0;
let computerScore = 0;

//Function to have computer generate Rock, Paper or Scissors
let getComputerChoice = function(){
    let randomNumber = Math.random()*3
    if (randomNumber < 1) {
        let computerChoice = "Rock"
        return computerChoice
    } else if (randomNumber > 2) {
        let computerChoice = "Scissors"
        return computerChoice
    } else {
        let computerChoice = "Paper"
        return computerChoice
    }
}

// User selects Rock
let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    if (userScore < 3 && computerScore < 3){
        let userChoice = "Rock";
        console.log(`You selected ${userChoice}.`);

        let computerChoice = getComputerChoice();
        console.log(`The computer selected ${computerChoice}.`)

        if (computerChoice == "Paper"){
            console.log("You lost.");
            computerScore++;
        } else if (computerChoice == "Scissors"){
            console.log("You won!");
            userScore++;
        } else {
            console.log("It's a tie...");
        }

        console.log(`Your score is: ${userScore}`);
        console.log(`The computer score is: ${computerScore}`);

        if (userScore >=3){
            console.log("You won 3 out of 5, congrats! Click the reset button to play another time.");
        };

        if (computerScore >=3){
            console.log("The computer beat you 3 out of 5, better luck next time! Click the reset button to play another time.");
        };
    };
});

let resetGame = function(){
    userScore = 0;
    computerScore = 0;
};

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    if (userScore >= 3 || computerScore >= 3){
    resetGame();
    console.log("Game was reset to default.");
    };
});