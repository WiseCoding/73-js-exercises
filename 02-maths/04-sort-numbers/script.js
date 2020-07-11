/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des numbers
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    const input = document.querySelector('#numbers');
    const numArray = input.value.split(',');
    const sort = numArray.sort((a, b) => a - b);
    input.value = sort;
  });
})();
