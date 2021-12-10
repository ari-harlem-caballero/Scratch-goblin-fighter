import { renderGoblin } from './render-utils.js';
// import functions and grab DOM elements
const form = document.querySelector('form');
const defeatedNumber = document.querySelector('#defeated-number');
// const defeatedList = document.querySelector('.defeated-list');
const playerHPElem = document.querySelector('#player-hp');
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
        hp: Math.floor(Math.random() * 5),
    };
  // add obj to array of goblins (in state)
    goblinInfo.push(newGoblin);

    displayGoblins();

    form.reset();
});

function displayGoblins() {
    //update list and clear list DOM
    goblinList.textContent = '';
    
    for (let goblinData of goblinInfo) {
        
        const goblinDiv = renderGoblin(goblinData);


        if (goblinData.hp > 0) {
            goblinDiv.addEventListener('click', () => {
                const randomNum = Math.random();
                
                if (randomNum < .33) {
                    goblinData.hp--;
                    alert(`you hit ${goblinData.name} with one of your arrows`);
                } else {
                    alert(`you missed ${goblinData.name} and are shamed`);
                }

                if (randomNum < .5) {
                    playerHP--;
                    alert(`Watch out! ${goblinData.name} hit you!`);
                } else {
                    alert(`Close one! ${goblinData.name} attacked you and missed`);
                }

                if (goblinData.hp === 0) {
                    defeatedCount++;
                    alert(`Victory!! You've defeated ${goblinData.name}`);
                }
                
                if (playerHP === 0) {
                    playerImg.classList.add('game-over');
                    alert('GAME OVER!!!');
                }

                playerHPElem.textContent = playerHP;
                defeatedNumber.textContent = defeatedCount;
                
                displayGoblins();
            });
            
        } 

        goblinList.append(goblinDiv);
    }
}

displayGoblins();