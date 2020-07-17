/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: duplication of an array
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const fruits = [
    'cherry',
    'durian',
    'Apple',
    'Pear',
    'strawberry',
    'tomato',
    'orange',
    'mandarin',
    'strawberry',
    'durian',
    'peach',
    'cherry',
    'grape',
    'cherry',
  ];

  function dupePurge(array) {
    const output = [];
    array.forEach((object) => {
      let dupe = output.includes(object);
      dupe ? console.log(`Duplicate "${object}" purged`) : output.push(object);
    });
    console.log(output);
  }

  document.querySelector('#run').onclick = () => {
    dupePurge(fruits);
  };
})();
