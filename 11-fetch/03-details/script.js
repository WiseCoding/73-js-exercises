/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector('#run').onclick = () => {
    const id = Number(document.querySelector('#hero-id').value);
    const hero = getHero(id).catch(error);
    printHero(hero);
  };

  async function getHero(id) {
    const heroGet = await fetch(`http://localhost:3000/heroes/${id}`);
    const json = await heroGet.json();
    const hero = json;
    const nohero = json.length;

    return hero === undefined ? ['Hero ID does not exist', nohero] : hero;
  }
  async function error() {
    console.error(error);
  }

  async function printHero(hero) {
    const target = document.querySelector('#target');
    const response = await hero;
    const range = response[1];
    let html = '';

    if (response[0] === 'Hero ID does not exist') {
      // If input ID has a "nohero" response, make user aware of the possible inputs
      html = `
              <p>
                Hero ID does not exist, Enter an ID between
                <b>1</b> and <b>${range}</b>
              </p>
            `;
    } else {
      // If response has a hero, print out hero properties in html template

      const [id, name, altEgo, abilArr] = [
        response.id,
        response.name,
        response.alterEgo,
        response.abilities,
      ]; // Destructuring assignment

      // List each ability
      let abilStr = '';
      abilArr.forEach((element) => {
        abilStr += `<li>${element}</li>`;
      });

      // Create html
      html += `
        <li class="hero">
          <h4 class="title">#${id}
            <strong class="name">${name}
            </strong><em class="alter-ego">${altEgo}</em>
          </h4>
          <ul class="powers">
            ${abilStr}
          </ul>
        </li>
      `;
    }
    // Output html to the user
    target.innerHTML = html;
  }
})();
