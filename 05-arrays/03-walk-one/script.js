/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let fruits = [
    'apple',
    'pear',
    'raspberry',
    'tomatoes',
    'kiwi',
    'banana',
    'orange',
    'mandarin',
    'durian',
    'peach',
    'grape',
    'cherry',
  ];

  document.querySelector('#run').onclick = () => {
    for (let i = 0; i < fruits.length; i++) {
      const print = fruits[i];
      console.log(print);
    }
  };
})();
