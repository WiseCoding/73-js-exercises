/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
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

  // Get Min & Max values
  const min1 = one.getAttribute('data-min');
  const max1 = one.getAttribute('data-max');
  const min2 = two.getAttribute('data-min');
  const max2 = two.getAttribute('data-max');
  const min3 = three.getAttribute('data-min');
  const max3 = three.getAttribute('data-max');
  const min4 = four.getAttribute('data-min');
  const max4 = four.getAttribute('data-max');

  // Set Start Values
  let i1 = min1;
  let i2 = min2;
  let i3 = min3;
  let i4 = min4;

  // Button Click Handlers
  one.onclick = () => {
    if (i1 >= max1) {
      i1 = min1 - 1;
    }
    i1++;
    if (i1 < 10) {
      i1 = `0${i1}`;
    }
    one.textContent = i1;
    target.textContent = `+${i1}${i2}${i3}${i4}`;
  };
  two.onclick = () => {
    if (i2 >= max2) {
      i2 = min2 - 1;
    }
    i2++;
    if (i2 < 10) {
      i2 = `0${i2}`;
    }
    two.textContent = i2;
    target.textContent = `+${i1}${i2}${i3}${i4}`;
  };
  three.onclick = () => {
    if (i3 >= max3) {
      i3 = min3 - 1;
    }
    i3++;
    if (i3 < 10) {
      i3 = `0${i3}`;
    }
    three.textContent = i3;
    target.textContent = `+${i1}${i2}${i3}${i4}`;
  };
  four.onclick = () => {
    if (i4 >= max4) {
      i4 = min4 - 1;
    }
    i4++;
    if (i4 < 10) {
      i4 = `0${i4}`;
    }
    four.textContent = i4;
    target.textContent = `+${i1}${i2}${i3}${i4}`;
  };
})();
