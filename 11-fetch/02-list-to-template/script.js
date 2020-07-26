/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // Click Handler
  document.querySelector('#run').onclick = () => {
    const heroes = getHeroes().catch(error);
    inputData(heroes);
  };

  // Get Hero Data
  async function getHeroes() {
    const response = await fetch('http://localhost:3000/heroes');
    const json = await response.json();
    return json;
  }
  // Handle Errors
  async function error() {
    console.error(error);
  }

  // When data is received, extract properties and print in html
  async function inputData(input) {
    const target = document.querySelector('#target');
    const values = await input;
    let html = '';

    for (const obj of values) {
      const id = obj.id;
      const name = obj.name;
      const altEgo = obj.alterEgo;
      const abilArr = obj.abilities;
      const ab1 = abilArr[0];
      const ab2 = abilArr[1];

      html += `
              <li class="hero">
                <h4 class="title">#${id}
                 <strong class="name">${name}
                 </strong><em class="alter-ego">${altEgo}</em>
                </h4>
                <ul class="powers">
                 <li>${ab1}</li>
                 <li>${ab2}</li>
                </ul>
              </li>
      `;
    }
    target.innerHTML = html;
  }
})();
