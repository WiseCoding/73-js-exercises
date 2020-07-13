/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.querySelector('#run').addEventListener('click', function () {
    randColor();
  });

  function randColor() {
    let colR = Math.floor(Math.random() * 255);
    let colG = Math.floor(Math.random() * 255);
    let colB = Math.floor(Math.random() * 255);
    let color = `rgb(${colR}, ${colG}, ${colB})`;
    document.body.style.backgroundColor = color;
  }
})();
