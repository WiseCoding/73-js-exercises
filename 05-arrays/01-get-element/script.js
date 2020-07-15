/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: array element
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
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
  document.querySelector('#run').addEventListener('click', function () {
    console.log(fruits[3]);
    alert(fruits[3]);
  });
})();
