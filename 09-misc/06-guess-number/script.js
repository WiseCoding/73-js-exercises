/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Random number between 1 & 100
  const randNum = ~~(Math.random() * 100) + 1;
  const target = document.querySelector('#target');
  const input = document.querySelector('#input');
  let count = 0;

  // Button Click Handler
  document.querySelector('#run').onclick = () => {
    // Get input from user
    const inpVal = Number(input.value);

    // Check if guess is bigger or smaller then randNum
    if (inpVal === randNum) {
      count++;
      input.style.borderColor = 'green';
      target.textContent = `That's it! You needed ${
        count === 1 ? count + ' time' : count + ' times'
      }!`;
    } else {
      count++;
      if (inpVal > randNum) {
        target.textContent = 'Too High!';
        input.style.borderColor = 'red';
      } else {
        target.textContent = 'Too Low!';
        input.style.borderColor = 'blue';
      }
    }

    // Logs
    /* console.log(randNum, 'Random Number');
    console.log(input, 'User Input');
    console.log(target, 'Output text');
    console.log(count, 'Amount of guesses'); */
  };
})();
