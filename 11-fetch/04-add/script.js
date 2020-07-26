/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: add un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async () => {
  // Get id for new object
  const lastID = await returnHeroes();

  // Handle error function
  async function error() {
    console.error(error, 'Error Called');
  }

  // Add New Hero data to localhost
  async function postHero(input) {
    // Set Fetch API Options
    const options = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      cache: 'default',
    };

    // Fetch, url & options (add hero)
    const push = await fetch('http://localhost:3000/heroes', options);
    return push.json();
  }

  async function returnHeroes() {
    // Fetch the added object and output into console
    const heroes = await fetch('http://localhost:3000/heroes');
    const json = await heroes.json();
    return [json, json.length];
  }

  // Click Handler
  document.querySelector('#run').onclick = async () => {
    // Get input from user and store in object
    const id = lastID[1];
    const name = document.querySelector('#hero-name').value;
    const alterEgo = document.querySelector('#hero-alter-ego').value;
    const abilities = document.querySelector('#hero-powers').value.split(',');
    const input = { id, name, alterEgo, abilities };

    // Fetch and add user input data
    const push = await postHero(input).catch(error);
    console.log(push, 'Hero has been successfully added!');
  };
})();
