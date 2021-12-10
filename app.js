// import functions and grab DOM elements
const form = document.querySelector('form');
const defeatedNumber = document.querySelector('#defeated-number');
const defeatedList = document.querySelector('.defeated-list');
const playerHPElem = document.querySelector('.player-hp');
const playerImg = document.querySelector('#player-img');
const goblinList = document.querySelector('.current-goblins');
// let state
let playerHP = 10;
let goblinInfo = [
    { name: 'Michael', hp: 2 },
    { name: 'Dwight', hp: 4 }
];
let defeatedCount = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
