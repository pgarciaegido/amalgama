var yo = require('yo-yo')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')

module.exports = function feed (n) {
  var routeInv = '/accede'
  var routeUser = './app/noticia/' + n._id

  return yo`<article class="Feed-article">
      <h2 class="Feed-article-title">${n.title}</h2>
        ${details(n.date, n.tags)}
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
