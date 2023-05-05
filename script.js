'use strict';

let vNumber = Math.floor(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  vNumber = Math.floor(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.check').addEventListener('click', function () {
  let vScore = Number(document.querySelector('.score').textContent);
  let vName = document.querySelector('.namei');
  let vGuessi = document.querySelector('.guess');
  const vGuess = Number(document.querySelector('.guess').value);
  if (vName.defaultValue != vName.value) {
    if (vGuessi.defaultValue != vGuessi.value) {
      if (vGuess === vNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.highscore').textContent = vScore;
        document.querySelector('.number').textContent = vNumber;
        document.querySelector('.name').textContent = vName.value;
      } else {
        displayMessage(vGuess > vNumber ? '📈 Too high!' : '📉 Too low!');
        vScore--;
        document.querySelector('.score').textContent = vScore;
        if (vScore === 0) {
          displayMessage('❌ End Game!');
          resetGame();
        }
      }
    } else {
      displayMessage('Inform a guess');
    }
  } else {
    displayMessage('Inform your name');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
