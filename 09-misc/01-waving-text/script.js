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
  //1: SET INTERVALS - milliseconds
  const colorInterval = 400;
  const growthInterval = 50;
  const spans = spanHTML();

  //2: CALL FUNCTIONS
  document.querySelector('#target').onclick = () => {
    setInterval(() => {
      colorChangeAnimation(spans);
    }, colorInterval);
    fontGrowthAnimation(spans, growthInterval);
  };

  // FUNCTIONS
  function spanHTML() {
    // Get html, Place each letter in an array, Wrap an span with unique ID around every letter
    const target = document.querySelector('#target');
    const array = [...target.textContent];
    let html = '';
    let index = 0;

    // Reset textcontent
    target.textContent = '';

    // Insert Span for each letter in array
    array.forEach((letter) => {
      index++;
      html += `<span id="char${index}">${letter}</span>`;
    });
    target.innerHTML = html;

    // Array has to be returned for other functions to work with
    return array;
  }

  // Color Every Letter with a random color in a cycle
  function colorChangeAnimation(letters) {
    const array = letters;
    for (let i = 1; i < array.length + 1; i++) {
      const [r, g, b] = [
        ~~(Math.random() * 250) + 1,
        ~~(Math.random() * 250) + 1,
        ~~(Math.random() * 250) + 1,
      ];
      const fontColor = `rgb(${r},${g},${b})`;
      document.querySelector(`#char${i}`).style.color = fontColor;
    }
  }

  function fontGrowthAnimation(letters, interval) {
    const array = letters;
    const growthInterval = interval;
    let size = 2;
    let i = 0;
    let state = 'grow';

    setInterval(() => {
      if (state === 'grow') {
        size += 0.3;
      }
      if (state === 'shrink') {
        size -= 0.3;
      }
      if (size > 6) {
        state = 'shrink';
      }
      if (size < 2) {
        state = 'grow';
      }
      if (i < array.length) {
        i++;
      } else {
        i = 1;
        size = ~~(Math.random() * 6) + 2;
      }
      document.querySelector(`#char${i}`).style.fontSize = `${size}rem`;
      console.log(i, size.toFixed(2), state, letters[i - 1]);
    }, growthInterval);
  }

  function waveAnimation() {
    console.log('waveAnimation Function Called');
  }
})();
