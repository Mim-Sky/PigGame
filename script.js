'use strict';

//Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

let currentScore = 0; // Variable that hold score added ti itself 

//Rolling the dice functionality
btnRoll.addEventListener(`click`, function() {
  //1 Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  //* variable inside of a function, because every time button is clicked I need a new number */

  // 2. Display dice
  diceEl.classList.remove(`hidden`);  diceEl.src = `dice-${dice}.png`;
  
  //3. Chceck  if rolled 1: if true reset score and switch to next player

  if(dice !== 1) {
    // Add dice to the current score
    currentScore += dice; //cirrentScore = currentScore += dice;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    //switch to next player
  }
});
