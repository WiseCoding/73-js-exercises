/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.querySelector('#run').onclick = () => {
    const pass1 = document.querySelector('#pass-one');
    const pass2 = document.querySelector('#pass-two');
    const val1 = pass1.value;
    const val2 = pass2.value;

    const err = new Error('No Match');

    if (val1 === val2) {
      console.log('Match!');
    } else {
      pass1.value = err;
      pass2.value = err;
    }
  };
})();
