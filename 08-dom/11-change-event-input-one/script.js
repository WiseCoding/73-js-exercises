/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const pass1 = document.querySelector('#pass-one');
  const counter = document.querySelector('#counter');

  // Listen for keyup
  pass1.onkeyup = () => {
    let val1 = pass1.value;
    const length = val1.length;
    counter.textContent = `${length}/10`;

    if (length > 10) {
      val1 = val1.slice(0, -1);
      pass1.value = val1;
      counter.textContent = `10/10`;
    }
  };
})();
