/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const table = `<table>
      <caption>
        Ten Rowed Table
      </caption>
      <colgroup>
        <col />
      </colgroup>

      <thead>
        <tr>
          <th>Head01</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Row02</td>
        </tr>
        <tr>
          <td>Row03</td>
        </tr>
        <tr>
          <td>Row04</td>
        </tr>
        <tr>
          <td>Row05</td>
        </tr>
        <tr>
          <td>Row06</td>
        </tr>
        <tr>
          <td>Row07</td>
        </tr>
        <tr>
          <td>Row08</td>
        </tr>
        <tr>
          <td>Row09</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Foot10</td>
        </tr>
      </tfoot>
    </table>`;

  document.querySelector('#target').innerHTML = table;
})();
