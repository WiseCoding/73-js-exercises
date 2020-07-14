/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: age calculator
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  function calcAge(year, month, day) {
    const dateBD = new Date(year, month, day);
    const dateNow = new Date();
    const age = dateNow.getFullYear() - dateBD.getFullYear();
    return age;
  }
  document.querySelector('#run').addEventListener('click', function () {
    const day = document.querySelector('#dob-day').value;
    const month = document.querySelector('#dob-month').value;
    const year = document.querySelector('#dob-year').value;
    alert(`You are ${calcAge(year, month, day)} years young :)`);
  });
})();
