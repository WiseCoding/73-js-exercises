/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let time = dateTransform();
  changeText(time);

  function dateTransform() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const now = new Date();
    const wday = days[now.getDay()];
    const mday = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();

    const time = `${wday} ${mday} ${month} ${year}, ${hour}h${min}`;

    console.log(time);
    return time;
  }

  function changeText(newDate) {
    document.querySelector('#target').textContent = newDate;
  }
})();
