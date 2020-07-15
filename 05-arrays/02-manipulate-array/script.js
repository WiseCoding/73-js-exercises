/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
    'strawberry',
    'tomato',
    'orange',
    'mandarin',
    'durian',
    'peach',
    'grape',
    'cherry',
  ];

  document.querySelector('#run').onclick = () => {
    fruits.shift(); // rm first
    fruits.pop(); // rm last
    fruits.unshift('banana'); // add first
    fruits.push('kiwi'); // add last

    console.log(fruits);
    alert(fruits);
  };
})();
