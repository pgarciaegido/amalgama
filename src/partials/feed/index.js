import yo from 'yo-yo'
import details from '../details/index'
import votesBar from '../votes_bar/index'

module.exports = function feed (n) {
  let routeInv = '/accede'
  let routeUser = './app/noticia/' + n._id

  return yo`<article class="Feed-article">
      <h2 class="Feed-article-title">${n.title}</h2>
        ${details(n.date, n.tags)}
      <div class="feed-separator"></div>
      <div class="Feed-article-bars">
        ${votesBar(n.agreeVotes, n.disagreeVotes)}
      </div>
        ${feedButton(routeUser, routeInv)}
    </article>`
}

function feedButton (routeUser, routeInv) {
  if (document.URL.indexOf('invitado') == -1) {
    return feedButtonTemp(routeUser)
  } else {
    return feedButtonTemp(routeInv)
  }
}

function feedButtonTemp (route) {
  return yo`<a href=${route} class="Feed-article-button">Ver más</a>`
}
