/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorial
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    function factorial(num) {
      if (num < 0) return -1;
      else if (num == 0) return 1;
      else {
        return num * factorial(num - 1);
      }
    }
    let input = document.querySelector('#number');
    let value = input.value;
    let output = factorial(value);
    console.log(output);
    input.value = output;
  });
})();
