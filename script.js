//Test commmand
console.log("Testing the Console logging");

//User is asked for choice: Rock, Paper or Scissors - DOES NOT WORK YET
let userChoice = prompt("Rock, paper or scissors?");
console.log(userChoice);

//Computer generates either Rock, Paper or Scissors
function getComputerChoice(){
    let randomNumber = Math.random()
    if (randomNumber < 0.33) {
        let computerChoice = "Rock"
        return computerChoice
    } else if (randomNumber > 0.67) {
        let computerChoice = "Scissors"
        return computerChoice
    } else {
        let computerChoice = "Paper"
        return computerChoice
    }
}

let computerChoice = getComputerChoice()
console.log(computerChoice)

//Write game rules: three conditions if user wins, three conditions if tie and three conditions if computer wins - DOES NOT WORK YET
if (computerChoice == "Rock"){
    console.log("The computer selected Rock")
} else if (computerChoice == "Paper"){
    console.log("The computer selected Paper")
} else if (computerChoice == "Scissors")
    console.log("The computer selected Scissors")

//Store game outcomes in variable and print computer score and player score - DOES NOT WORK YET
let userScore = 0;
let computerScore = 0;

//Keep playing until either player reaches 3 points (best of 5) - DOES NOT WORK YET


//Create button to reset game - DOES NOT WORK YET