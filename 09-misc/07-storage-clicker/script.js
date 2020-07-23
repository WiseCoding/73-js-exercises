/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Query Selectors
  const target = document.querySelector('#target');
  const increment = document.querySelector('#increment');

  // Declare Numbers
  let localNumber = localStorage.getItem('number');
  let number = target.textContent;

  // Get Number from localStorage if it exists
  if (localNumber !== null) {
    number = localNumber;
  }

  // Display Number
  target.textContent = number;

  // Click Handlers
  increment.onclick = () => {
    // Increment and display
    number++;
    target.textContent = number;

    // Save new number in localStorage
    localStorage.setItem('number', number);
  };

  // Remove Number from localStorage
  target.onclick = () => {
    // Delete number
    localStorage.removeItem('number');
    target.textContent = 'Number Deleted';
  };
})();
