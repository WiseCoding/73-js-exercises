/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calc des friday 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  function getYear() {
    const inpYear = parseInt(document.querySelector('#year').value);
    const inpYearStr = inpYear.toString();
    return inpYearStr;
  }

  function getFriday(year) {
    const date = new Date(year);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let arrFri13 = [];

    // check what day 13 is for each month
    for (let i = 1; i <= 12; i++) {
      let month = new Date(`${i} 13, ${year}`);

      // if day 13 is a friday, add to array
      if (month.getDay() === 5) {
        let luckyMonths = month.getMonth();
        luckyMonths = monthNames[luckyMonths];
        arrFri13.push(luckyMonths);
      }
    }

    // convert array to string, remove comma's'
    arrFri13 = arrFri13.toString();
    for (let i = 0; i < arrFri13.length; i++) {
      arrFri13 = arrFri13.replace(',', ' ');
    }

    return arrFri13;
  }

  function setOutput(output) {
    document.querySelector('#year').value = output;
    console.log(output);
  }

  document.querySelector('#run').addEventListener('click', function () {
    const year = getYear();
    const output = getFriday(year);
    setOutput(output);
  });
})();
