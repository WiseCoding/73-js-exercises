/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector('#run').onclick = () => {
    const keys = ['name', 'species', 'age', 'gender', 'color'];
    const values = ['Skitty', 'cat', 9, 'female', 'tabby'];

    // Create Array-pairs [[key, val], [key, val], ...]
    const arr = [];
    keys.forEach((key, i) => {
      arr.push([keys[i], values[i]]);
    });

    // Convert Array -> Object
    const obj = Object.fromEntries(arr);
    console.log(obj);

    // Display Keys & Values in console
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
  };
})();
