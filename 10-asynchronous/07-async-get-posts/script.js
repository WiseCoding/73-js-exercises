/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
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
    console.log(articles);
  }
  async function error(error) {
    await error;
    console.error(error);
  }
})();
