let currentPlayerScore = 0;
let currentComputerScore = 0;
let endGameFlag = false;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // win cases
  if (playerSelection === "scissors" && computerSelection === "paper") {
    currentPlayerScore += 1;
    return `✅ You win!\nScissors beat Paper\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    currentPlayerScore += 1;
    return `✅ You win!\n Rock beat Scissors\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    currentPlayerScore += 1;
    return `✅ You win!\n Paper beat Rock\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    // lose cases
    currentComputerScore += 1;
    return `🏳️ You lose!\n Rock beat Scissors\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    currentComputerScore += 1;
    return `🏳️ You lose!\n Paper beat Rock\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    currentComputerScore += 1;
    return `🏳️ You lose!\n Scissors beat Paper\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  } else if (playerSelection === computerSelection)
    return `🤝 Computer chose ${computerSelection}.\n Well... same as you, it's a tie\n\nCurrent Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
  else if (playerSelection === "exit" || playerSelection === '') {
    endGameFlag = true;
    alert(`Goodbye 👋`);
  } else
    return `❌ Wrong input\n Try again\n\nCurrent Score is still:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`;
}

function game() {
  alert(
    'Welcome to a "Rock Paper Scissors" game.\nIt\'s a best of 5 match - whoever wins 3 rounds first, the one wins. \nGood luck! 🤓'
  );
  while (true) {
    let playerSelection = prompt(
      'Please enter your choice (scissors || rock || paper)\n\n To leave game type "exit" or just "Cancel" 😅'
    );

    let gameResult = playRound(playerSelection, getComputerChoice());
    if (endGameFlag === true || gameResult === '') break;

    alert(gameResult);
    if (currentPlayerScore === 3) {
      alert(
        `GAME OVER\n✌️ You won! Congratulations! 🎉🎉🎉\n\nFinal Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`
      );
      break;
    } else if (currentComputerScore === 3) {
      alert(
        `GAME OVER\n😓 You lost! Good luck next time 😉\n\nFinal Score:\n😀 ${currentPlayerScore} : ${currentComputerScore} 💻`
      );
      break;
    }
  }
}

game();
