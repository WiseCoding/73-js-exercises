/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // Error handler function
  async function error() {
    console.error(error, 'Error Called');
  }

  // Delete hero by ID
  async function deleteHero(id) {
    // Set Fetch API Options
    const options = {
      method: 'Delete',
      headers: { 'Content-Type': 'application/json' },
    };

    // Fetch, url & options (delete hero by ID)
    const del = await fetch(`http://localhost:3000/heroes/${id}`, options);
    // If promise "OK" is true, if else, promise OK is a status returned by the server
    return del.ok
      ? console.log(`Hero with ID '${id}' successfully deleted!`)
      : console.log(`Error, hero with ID '${id}' does not exist`);
  }

  // Click Event
  document.querySelector('#run').onclick = async () => {
    // Fetch and delete hero by ID#
    const id = document.querySelector('#hero-id').value;
    await deleteHero(id).catch(error);
  };
})();
