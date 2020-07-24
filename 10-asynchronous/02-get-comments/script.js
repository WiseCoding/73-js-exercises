/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: loading articles and comments
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  /* function getPostsFunc(error, articles) {
    if (error) {
      console.error(error);
      return;
    }
    return articles;
  }

  function getCommentsFunc(error, comments) {
    if (error) {
      console.error(error);
      return;
    }
    return comments;
  }

  document.querySelector('#run').onclick = () => {
    let articles = window.lib.getPosts(getPostsFunc);
    console.log(articles, 'Articles log');
  }; */

  function getPostsFunc(error, articles) {
    if (error) {
      console.error(error);
      return;
    }

    //Loop through every article in articles, and insert comments
    for (let i = 0; i < articles.length; i++) {
      let article = articles[i]; //Get Article[i]
      let id = article.id; //Extract ID from article

      //Input Comments inside article
      window.lib.getComments(id, (error, comments) => {
        if (error) {
          console.error(error);
        } else {
          article['comments'] = comments;
        }
      });
    }
    // Log articles
    console.log(articles);
  }

  document.querySelector('#run').onclick = () => {
    window.lib.getPosts(getPostsFunc);
  };
})();
