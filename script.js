//Declare user score and computer score
let userScore = 0;
let computerScore = 0;

while (userScore < 3 && computerScore < 3){

//User is asked for choice: Rock, Paper or Scissors
function getUserChoice(){
    let userPrompt = prompt("Rock, paper or scissors?");
    if (userPrompt.toLowerCase() == "rock") {
        let userChoice = "Rock"
        return userChoice
    } else if (userPrompt.toLowerCase() == "paper"){
        let userChoice = "Paper"
        return userChoice
    } else if (userPrompt.toLowerCase() == "scissors"){
        let userChoice = "Scissors"
        return userChoice
    } else alert("Invalid choice")
}

let userChoice = getUserChoice()

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

//Write game rules: three conditions if user wins, three conditions if tie and three conditions if computer wins
if (computerChoice == "Rock"){
    console.log("The computer selected Rock")
    if (userChoice == "Rock"){
        console.log("You also selected Rock, so it's a tie!")
    } else if (userChoice == "Paper"){
        console.log("You selected Paper. Paper wraps around rock, you won! Congrats!")
        userScore++
    } else if (userChoice == "Scissors"){
        console.log("You selected Scissors. Rock beats scissors, loser!")
        computerScore++
    }
} else if (computerChoice == "Paper"){
    console.log("The computer selected Paper")
    if (userChoice == "Rock"){
        console.log("You selected Rock. Paper wraps around rock, loser!")
        computerScore++
    } else if (userChoice == "Paper"){
        console.log("You also selected Paper, so it's a tie!")
    } else if (userChoice == "Scissors"){
        console.log("You selected Scissors. You can cut through paper, you won! Congrats!")
        userScore++
    }
} else if (computerChoice == "Scissors"){
    console.log("The computer selected Scissors")
    if (userChoice == "Rock"){
        console.log("You selected Rock. Rock beats scissors, you won! Congrats!")
        userScore++
    } else if (userChoice == "Paper"){
        console.log("You selected Paper. Scissors cut through your paper, loser!")
        computerScore++
    } else if (userChoice == "Scissors"){
        console.log("You also selected Scissors, so it's a tie!")
    }
}

console.log(`Your score is: ${userScore}`)
console.log(`The computer's score is: ${computerScore}`)
}

//Keep playing until either player reaches 3 points (best of 5) 
if (userScore == 3){
    alert("Congrats! You won best of 5! Refresh the page to play another time")
} else if (computerScore == 3){
    alert("Unfortunately you lost - the computer reached 3/5. Better luck next time, refresh the page.")
    }


//Create button to reset game - DOES NOT WORK YET
