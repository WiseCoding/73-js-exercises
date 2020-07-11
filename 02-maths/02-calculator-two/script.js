/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculator (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  let output = document.getElementById('output');

  const performOperation = (operation) => {
    let calc;

    switch (operation) {
      case 'addition':
        opOne = Number(document.getElementById('op-one').value);
        opTwo = Number(document.getElementById('op-two').value);
        calc = opOne + opTwo;
        output.value = calc;
        break;

      case 'subtraction':
        opOne = Number(document.getElementById('op-one').value);
        opTwo = Number(document.getElementById('op-two').value);
        calc = opOne - opTwo;
        output.value = calc;
        break;

      case 'multiplication':
        opOne = Number(document.getElementById('op-one').value);
        opTwo = Number(document.getElementById('op-two').value);
        calc = opOne * opTwo;
        output.value = calc;
        break;

      case 'division':
        opOne = Number(document.getElementById('op-one').value);
        opTwo = Number(document.getElementById('op-two').value);
        calc = opOne / opTwo;
        output.value = calc;
        break;

      default:
        output.value = 'Do something!';

    }
  };

  Array.from(document.querySelectorAll('button.operator')).forEach(($btn) =>
    $btn.addEventListener('click', () => (performOperation($btn.id), false))
  );
})();
