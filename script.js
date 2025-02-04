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
    let userChoice = "Rock";
    console.log(`User selected ${userChoice}.`);

    let computerChoice = getComputerChoice();
    console.log(`Computer selected ${computerChoice}.`)

    if (computerChoice == "Paper"){
        console.log("You lost.");
        computerScore++;
    } else if (computerChoice == "Scissors"){
        console.log("You won!");
        userScore++;
    } else {
        console.log("It's a tie...")
    }
    console.log(`Your score is: ${userScore}`);
    console.log(`The computer score is: ${computerScore}`);
});


// while (userScore < 3 && computerScore < 3){


// //Write game rules: three conditions if user wins, three conditions if tie and three conditions if computer wins
// if (computerChoice == "Rock"){
//     console.log("The computer selected Rock")
//     if (userChoice == "Rock"){
//         console.log("You also selected Rock, so it's a tie!")
//     } else if (userChoice == "Paper"){
//         console.log("You selected Paper. Paper wraps around rock, you won! Congrats!")
//         userScore++
//     } else if (userChoice == "Scissors"){
//         console.log("You selected Scissors. Rock beats scissors, loser!")
//         computerScore++
//     }
// } else if (computerChoice == "Paper"){
//     console.log("The computer selected Paper")
//     if (userChoice == "Rock"){
//         console.log("You selected Rock. Paper wraps around rock, loser!")
//         computerScore++
//     } else if (userChoice == "Paper"){
//         console.log("You also selected Paper, so it's a tie!")
//     } else if (userChoice == "Scissors"){
//         console.log("You selected Scissors. You can cut through paper, you won! Congrats!")
//         userScore++
//     }
// } else if (computerChoice == "Scissors"){
//     console.log("The computer selected Scissors")
//     if (userChoice == "Rock"){
//         console.log("You selected Rock. Rock beats scissors, you won! Congrats!")
//         userScore++
//     } else if (userChoice == "Paper"){
//         console.log("You selected Paper. Scissors cut through your paper, loser!")
//         computerScore++
//     } else if (userChoice == "Scissors"){
//         console.log("You also selected Scissors, so it's a tie!")
//     }
// }

// console.log(`Your score is: ${userScore}`)
// console.log(`The computer's score is: ${computerScore}`)
// }

//Keep playing until either player reaches 3 points (best of 5) 
// if (userScore == 3){
//     alert("Congrats! You won best of 5! Refresh the page to play another time")
// } else if (computerScore == 3){
//     alert("Unfortunately you lost - the computer reached 3/5. Better luck next time, refresh the page.")
//     }


//Create button to reset game - DOES NOT WORK YET