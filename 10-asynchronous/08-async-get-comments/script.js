/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector('#run').onclick = () => {
    window.lib.getPosts().then(getPosts).catch(error);
  };

  async function getPosts(articles) {
    await articles;
    for (const obj in articles) {
      const id = articles[obj].id;
      window.lib
        .getComments(id)
        .then((comments) => (articles[obj].comments = comments))
        .catch(error);
    }
    console.log(articles);
  }
  async function error(error) {
    await error;
    console.error(error);
  }
})();
