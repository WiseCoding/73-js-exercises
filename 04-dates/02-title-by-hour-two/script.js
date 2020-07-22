/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Change greeting message if our input time is smaller than the actual time
  function greeting(inpTime) {
    // get current hour and minutes
    let now = getFullTime();

    let message;

    if (now < inpTime) {
      message = `Have a good day!`;
    } else {
      message = `Enjoy your evening!`;
    }

    document.querySelector('#target').textContent = message;
  }

  // Add 0 in front of input if smaller then 10
  function checkTime(time) {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }

  // Get current time, and convert it to a full number
  function getFullTime() {
    const date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    h = checkTime(h);
    m = checkTime(m);
    let fullTime = h + m;
    fullTime = Number(fullTime);
    return fullTime;
  }

  greeting(1730);
})();
