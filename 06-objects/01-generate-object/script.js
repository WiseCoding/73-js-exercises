/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: generate un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const me = [
    {
      lastname: 'Bwontie',
      firstname: 'Mattias',
      age: 99,
      city: 'Gent',
      country: 'Belgium',
    },
  ];
  document.querySelector('#run').onclick = () => {
    console.log(
      `Hello! My name is ${me[0].firstname} ${me[0].lastname}, I am ${me[0].age} years old and live in ${me[0].country} in the city of ${me[0].city}.`
    );
    console.log(me);
  };
})();
