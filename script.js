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
  const vGuess = Number(document.querySelector('.guess').value);
  if (vGuess === vNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.highscore').textContent = vScore;
    document.querySelector('.number').textContent = vNumber;
  } else {
    displayMessage(vGuess > vNumber ? '📈 Too high!' : '📉 Too low!');
    vScore--;
    document.querySelector('.score').textContent = vScore;
    if (vScore === 0) {
      displayMessage('❌ End Game!');
      resetGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

//Luan Ferreira version 1.0.1
