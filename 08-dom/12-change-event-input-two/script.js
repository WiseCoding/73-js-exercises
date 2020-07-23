/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const pass1 = document.querySelector('#pass-one');
  const validity = document.querySelector('#validity');

  // Listen for keyup
  pass1.onkeyup = () => {
    const val1 = pass1.value;
    const length = val1.length;
    let num = 0;

    // Check numbers in input
    for (let i = 0; i < val1.length; i++) {
      if (!isNaN(val1[i])) {
        num++;
      }
    }

    // Validate: at least 8 characters & at least 2 numbers
    if (length >= 8 && num >= 2) {
      validity.textContent = `ok`;
    } else {
      validity.textContent = `Not ok`;
    }
  };
})();
