export function renderGoblin(goblinData) {
    const goblinDiv = document.createElement('div');
    const goblinFace = document.createElement('p');
    const goblinNameElem = document.createElement('p');
    const goblinHP = document.createElement('p');

    const goblinStatsDiv = document.createElement('div');

    goblinDiv.classList.add('goblin');
    goblinFace.classList.add('goblin-emoji');
    goblinStatsDiv.classList.add('goblin-holder');

    goblinNameElem.textContent = goblinData.name;
    goblinHP.textContent = `HP: ${goblinData.hp < 0 ? 0 : goblinData.hp}`;
    goblinFace.textContent = goblinData.hp > 0 ? '👹' : '💥';
// I want to make name&HP under its own DIV for styling purposes but am too tired to remember how
    if (goblinData.hp < 0) {
        goblinDiv.classList.add('dead');
    }
  // append (p to D, div to list of gobs)
    goblinStatsDiv.append(goblinNameElem, goblinHP);
    goblinDiv.append(goblinFace, goblinStatsDiv);

    return goblinDiv;
}