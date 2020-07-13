/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  fizzbuzzer(1, 100);

  function fizzbuzzer(start, stop) {
    do {
      if (start % 3 === 0 && start % 5 === 0) {
        console.log(start + ' fizzbuzz');
        start++;
      } else if (start % 3 === 0) {
        console.log(start + ' fizz');
        start++;
      } else if (start % 5 === 0) {
        console.log(start + ' buzz');
        start++;
      } else {
        console.log(start);
        start++;
      }
    } while (start < (stop+1));
  }
})();
