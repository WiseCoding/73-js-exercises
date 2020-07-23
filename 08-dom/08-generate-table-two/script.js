/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const row = 10;
  const col = 10;

  let table = '';

  for (let r = 1; r < row + 1; r++) {
    table += `<tr>`;

    for (let c = 1; c < col + 1; c++) {
      table += `<td>${r * c}</td>`;
    }
    table += `</tr>`;
  }

  const print = `<table>
      <caption>
        Table Generator
      </caption>

      <tbody>
        ${table}
      </tbody>
    </table>`;

  document.querySelector('#target').innerHTML = print;
})();
