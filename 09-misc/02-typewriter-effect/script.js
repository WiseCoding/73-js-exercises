/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const target = document.querySelector('#target');
  const text = target.textContent;
  target.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text[i];
      i++;
      let speed = ~~(Math.random() * 200) + 1;
      setTimeout(typeWriter, speed);
      console.log(speed);
    }
  }

  typeWriter();
})();
