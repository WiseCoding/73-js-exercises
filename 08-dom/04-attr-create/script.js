/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Get data from attribute data-image
  const source = document.querySelector('#source');
  const value = source.getAttribute('data-image');

  // Create img element
  const target = document.querySelector('#target');
  const img = document.createElement('img');

  // Set img attribute
  img.setAttribute('src', value);

  // Add img to html
  target.appendChild(img);

  // Remove #source
  source.remove();
})();
