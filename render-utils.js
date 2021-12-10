for (let goblin of goblinInfo) {
    const goblinDiv = document.createElement('div');
    const goblinFace = document.createElement('p');
    const goblinNameElem = document.createElement('p');
    const goblinHP = document.createElement('p');

    goblinDiv.classList.add('goblin');

    goblinNameElem.textContent = goblinInfo.name;
    goblinHP.textContent = goblinInfo.hp < 0 ? 0 : goblinInfo.hp;
    goblinFace.textContent = goblinInfo.hp > 0 ? '👹' : '💥';
  // append (p to D, div to list of gobs)
    goblinDiv.append(goblinFace, goblinNameElem, goblinHP);