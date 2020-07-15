/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: array traversal (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let fruits = [
    'apple',
    'peer',
    'strawberry',
    'tomato',
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
    fruits.forEach((element) => {
      console.log(element);
    });
  };
})();
