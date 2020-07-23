/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 *
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Get html elements
  const target = document.querySelector('#target');
  const one = document.querySelector('#part-one');
  const two = document.querySelector('#part-two');
  const three = document.querySelector('#part-three');
  const four = document.querySelector('#part-four');
  const btn1 = document.querySelector('#fix-part-one');
  const btn2 = document.querySelector('#fix-part-two');
  const btn3 = document.querySelector('#fix-part-three');
  const btn4 = document.querySelector('#fix-part-four');

  // Get Min & Max values
  const min1 = Number(one.getAttribute('data-min'));
  const max1 = Number(one.getAttribute('data-max'));
  const min2 = Number(two.getAttribute('data-min'));
  const max2 = Number(two.getAttribute('data-max'));
  const min3 = Number(three.getAttribute('data-min'));
  const max3 = Number(three.getAttribute('data-max'));
  const min4 = Number(four.getAttribute('data-min'));
  const max4 = Number(four.getAttribute('data-max'));

  // Click Handlers
  let num1 = `0${min1}`;
  let num2 = `0${min2}`;
  let num3 = `0${min3}`;
  let num4 = `0${min4}`;

  btn1.onclick = () => {
    num1 = random(min1, max1);
    if (num1 < 10) {
      num1 = `0${num1}`;
    }
    one.value = num1;
    target.textContent = `+${num1}${num2}${num3}${num4}`;
  };
  btn2.onclick = () => {
    num2 = random(min2, max2);
    if (num2 < 10) {
      num2 = `0${num2}`;
    }
    two.value = num2;
    target.textContent = `+${num1}${num2}${num3}${num4}`;
  };
  btn3.onclick = () => {
    num3 = random(min3, max3);
    if (num3 < 10) {
      num3 = `0${num3}`;
    }
    three.value = num3;
    target.textContent = `+${num1}${num2}${num3}${num4}`;
  };
  btn4.onclick = () => {
    num4 = random(min4, max4);
    if (num4 < 10) {
      num4 = `0${num4}`;
    }
    four.value = num4;
    target.textContent = `+${num1}${num2}${num3}${num4}`;
  };

  // Random Number Generator
  function random(min, max) {
    return ~~(Math.random() * (max - min)) + min;
  }
})();
