/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Reset field
  let target = document.querySelector('#target');
  target.textContent = '';

  // Add span to animate
  const span = document.createElement('SPAN');
  span.textContent = 'lorem wave';
  target.appendChild(span);

  // Animation
  let id = setInterval(modifySize, 100);
  let size = 1;
  let growth = 'grow';

  // Function
  function modifySize() {
    let fontSize = '1rem';

    //size
    if (size === 10 && growth === 'grow') {
      growth = 'shrink';
    }
    if (size === 1 && growth === 'shrink') {
      growth = 'grow';
    }

    if (growth === 'grow') {
      size++;
    } else {
      size--;
    }
    fontSize = `${size}rem`;
    span.style.fontSize = fontSize;

    //color
    const color1 = ~~(Math.random() * 250) + 1;
    const color2 = ~~(Math.random() * 250) + 1;
    const color3 = ~~(Math.random() * 250) + 1;
    fontColor = `rgb(${color1},${color2},${color3})`;
    span.style.color = fontColor;
  }

  // Cancel animation on click
  document.querySelector('#target').onclick = () => {
    clearInterval(id);
  };
})();
