/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const people = new Set([
    'Nicolas',
    'Nick',
    'Leny',
    'Alexandre',
    'Charlène',
    'Laureline',
    'Esther',
    'Simon',
    'Lucas',
  ]);

  document.querySelector('#run').onclick = () => {
    console.log(`There are ${people.size} people in the set`);
    const check = people.has('Alexandre');
    check ? console.log('Alexandre is present') : console.log('Alexandre is missing');
  };
})();
