/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  /* document.getElementById('run').addEventListener('click', function () { */
  const one = 1;
  const two = 21;
  let arr = [];

  for (let i = one; i < two; i++) {
    let total = i * i;

    if (total > two) {
      return total;
    }
    console.log(total);
    alert(total);
  }
  /* }); */
})();
