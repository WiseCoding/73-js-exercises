/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.querySelector('#red').addEventListener('click', function () {
    colorizer('red');
  });
  document.querySelector('#green').addEventListener('click', function () {
    colorizer('green');
  });
  document.querySelector('#yellow').addEventListener('click', function () {
    colorizer('yellow');
  });
  document.querySelector('#blue').addEventListener('click', function () {
    colorizer('blue');
  });

  function colorizer(color) {
    document.body.style.backgroundColor = color;
  }
})();
