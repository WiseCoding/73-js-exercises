/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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

    if (val1 === val2) {
      pass1.style.borderColor = '#c0c0c0';
      pass2.style.borderColor = '#c0c0c0';
      console.log('Match!');
    } else {
      pass1.style.borderColor = 'red';
      pass2.style.borderColor = 'red';
      console.log('No Match');
    }
  };
})();
