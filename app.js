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

// set event listeners (form, displayGoblin --> list)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: 3,
    };
  // add obj to array of goblins (in state)
    goblinInfo.push(newGoblin);
  // update list DOM (goblinList)
    goblinList.textContent = '';
  // loop thru goblins (make holder for ea part of goblin--DIV, face, name, hp)
    for (let goblin of goblinInfo) {
        const goblinDiv = document.createElement('div');
        const goblinFace = document.createElement('p');
        const goblinNameElem = document.createElement('p');
        const goblinHP = document.createElement('p');

        goblinNameElem.textContent = goblinInfo.name;
        goblinHP.textContent = goblinInfo.hp;
        goblinFace.textContent = goblinInfo.hp > 0 ? '👹' : '💥';
        // append div to list of gobs
        goblinList.append(goblinDiv);
    }
});

displayGoblins();