function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }

  return result;
}

function getWinner(guess1, guess2) {
  if (guess1 === guess2) {
    return `TIE`;
  } else if (guess1 === 'Rock' && guess2 === 'Scissor') {
    return `Player 1 wins!`;
  } else if (guess1 === 'Scissor' && guess2 === 'Paper') {
    return `Player 1 wins!`;
  } else if (guess1 === 'Paper' && guess2 === 'Rock') {
    return `Player 1 wins!`;
  } else {
    return `Player 2 wins!`;
  }
}

module.exports = {
  checkFive,
  getWinner,
};
