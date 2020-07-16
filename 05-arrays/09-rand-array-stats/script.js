/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau random & statistics
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Generate 10 random numbers
  document.querySelector('#run').onclick = () => {
    const numbers = Array.from({ length: 10 }, () => ~~(Math.random() * 100));

    // Fill in numbers in placeholder
    for (let i = 1; i < numbers.length + 1; i++) {
      document.querySelector(`#n-${i}`).textContent = numbers[i - 1];
    }

    // Calculate smallest number (min)
    const small = numbers.sort((a, b) => a - b);
    const min = small[0];
    document.querySelector('#min').textContent = min;

    // Calculate biggest number (max)
    const big = numbers.sort((b, a) => a - b);
    const max = big[0];
    document.querySelector('#max').textContent = max;

    // Calculate sum of all numbers (sum)
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    document.querySelector('#sum').textContent = sum;

    // Calculate average of all numbers (average)
    document.querySelector('#average').textContent = sum / numbers.length;
  };
})();
