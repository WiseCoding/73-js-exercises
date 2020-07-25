/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // Click Handler
  document.querySelector('#run').onclick = () => {
    // First Promise
    window.lib.getPosts().then(insertComments).catch(error);
  };

  function insertComments(articles) {
    for (const obj in articles) {
      // Nested Promise, get comments & insert in each article
      window.lib
        .getComments()
        .then((comments) => {
          articles[obj].comments = comments;
        })
        .catch(error);
    }
    console.log(articles);
  }
  function error(error) {
    console.log(error);
  }
})();
