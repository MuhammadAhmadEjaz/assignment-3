// available choices in order of advantage over one another
const availableChoices = ["rock", "paper", "scissor"];

// computer generates a random choice here
function computerPlay() {
  let choice =
    availableChoices[Math.floor(Math.random() * availableChoices.length)];
  return choice;
}

//function that plays the game
function playGame(userSelection, computerSelection) {
  var userSelectionLowerCase = userSelection.toLowerCase();
  if (userSelectionLowerCase === computerSelection) {
    console.log("its a Draw");
    return 0;
  } else if (availableChoices.indexOf(userSelectionLowerCase) === -1) {
    console.log(`${userSelection} is not a valid choice`);
    return 0;
  } else if (
    (availableChoices.indexOf(userSelectionLowerCase) + 1) % 3 ===
    availableChoices.indexOf(computerSelection)
  ) {
    console.log(
      `You Lose! \n ${computerSelection} beats ${userSelectionLowerCase}   `
    );
    return -1;
  } else if (
    (availableChoices.indexOf(userSelectionLowerCase) + 2) % 3 ===
    availableChoices.indexOf(computerSelection)
  ) {
    console.log(
      `You Win! \n ${userSelectionLowerCase} beats ${computerSelection} `
    );
    return 1;
  }
}

//main function that let the game loop
function main() {
  var userScore = 0;
  var computerScore = 0;
  alert("We are going to play a game of rock-paper-scissor");
  for (let index = 0; index < 5; index++) {
    var userChoice = prompt(`Round ${index + 1} \n Enter your choice`);
    result = playGame(userChoice, computerPlay()) 
    if (result === 0) {
      continue;
    } else if (result === 1) {
      userScore += 1;
    } else {
      computerScore += 1;
    }
  }
  if (computerScore > userScore) {
    console.log(`you lose Computer-${computerScore}|| You-${userScore}`);
    var again = prompt("want to play again? \n Enter yes or no ?");
    if (again.toLowerCase() === "yes") {
      main();
    }
  } else if (computerScore < userScore) {
    console.log(`you win You-${userScore} || Computer-${computerScore}`);
    var again = prompt("want to play again? \n Enter yes or no ?");
    if (again.toLowerCase() === "yes") {
      main();
    }
  } else {
    console.log(`Its a Draw You-${userScore} || Computer-${computerScore}`);
    var again = prompt("want to play again? \n Enter yes or no ?");
    if (again.toLowerCase() === "yes") {
      main();
    }
  }
}
main();
