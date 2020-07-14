/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: text en function of time (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  function timedMessage(hour) {
    const time = new Date();
    const nowHour = time.getHours();
    let message;

    if (nowHour < hour) {
      message = `Have a good day! (${nowHour}:00)`;
    } else {
      message = `Enjoy the evening! (${nowHour}:00)`;
    }

    document.querySelector('#target').textContent = message;
  }

  timedMessage(18); // When it's later than 18, it will send a good evening message
})();
