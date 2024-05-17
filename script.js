let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  humanDifference = Math.abs(humanGuess - targetNumber);
  computerDifference = Math.abs(computerGuess - targetNumber);
  if (
    humanDifference == computerDifference ||
    humanDifference < computerDifference
  ) {
    return true;
  } else if (humanDifference > computerDifference) {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
