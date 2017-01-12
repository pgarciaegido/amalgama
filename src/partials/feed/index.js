var yo = require('yo-yo')
var $ = require('jquery')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')

module.exports = function feed (n) {
  var routeInv = '/accede'
  var routeUser = './noticia/' + n.id

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
  if (document.URL.indexOf('invitado') == -1){
    console.log('debe pasar por aquí')
    return feedButtonTemp(routeUser)
  } else {
    return feedButtonTemp(routeInv)
  }
}

function feedButtonTemp (route) {
  console.log('esta es la ruta del template ' + route)
  return yo`<a href=${route}><button class="Feed-article-button">Ver más</button></a>`
}
