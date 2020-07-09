/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () {
  let fullPerson = ask();
  ok = confirm(fullPerson);
  if (ok) {
    alert('Info saved');
  } else {
    ask();
  }
})();

function ask() {
  let age = prompt('How old are you?');
  let gender = prompt('What gender are you?');
  let town = prompt('What is the name of the town you currently live in?');
  person =
    'Your age is ' +
    age +
    ', your gender is ' +
    gender +
    ', you live in ' +
    town +
    '.';
  return person;
}
