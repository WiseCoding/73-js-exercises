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
  // Handle error function
  async function error() {
    console.error(error);
  }

  // Add New Hero data to localhost
  async function postHero(input, id) {
    // Set Fetch API Options
    const options = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      cache: 'default',
    };

    // Fetch, url & options (add hero)
    const push = await fetch('http://localhost:3000/heroes', options);
    // If promise "OK" is true, if else, promise OK is a status returned by the server
    return (await push.ok)
      ? console.log(await push.json(), 'Hero Successfully Added!')
      : console.log(`ERROR! Can't add hero. Delete hero with ID '${id}' first.`);
  }

  async function returnHeroes() {
    // Fetch the added object and output into console
    const heroes = await fetch('http://localhost:3000/heroes');
    const json = await heroes.json();
    return [json, json.length];
  }

  // Click Handler
  document.querySelector('#run').onclick = async () => {
    // Get id for new object, based on object length, might cause issues when deleting objects...
    const lastID = await returnHeroes();
    const id = lastID[1] + 1;

    // Get input from user and store in object
    const name = document.querySelector('#hero-name').value;
    const alterEgo = document.querySelector('#hero-alter-ego').value;
    const abilities = document.querySelector('#hero-powers').value.split(',');
    const input = {
      id,
      name,
      alterEgo,
      abilities,
    };

    // Fetch and add user input data
    await postHero(input, id).catch(error);
  };
})();
