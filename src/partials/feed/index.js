var yo = require('yo-yo')
var $ = require('jquery')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')

module.exports.notLogged = function (n) {
	return yo`<article class="Feed-article">
      <h2 class="Feed-article-title">${n.title}</h2>
        ${details(n.date, n.tags)}
      <div class="Feed-article-bars">
        ${votesBar(n.agreeVotes, n.disagreeVotes)}
      </div>
      <button class="Feed-article-button"><a href="/accede">Ver más</a></button>
    </article>`
}

module.exports.logged = function (n) {
	return yo`<article class="Feed-article">
      <h2 class="Feed-article-title">${n.title}</h2>
        ${details(n.date, n.tags)}
      <div class="Feed-article-bars">
        ${votesBar(n.agreeVotes, n.disagreeVotes)}
      </div>
      <button class="Feed-article-button"><a href="./noticia/${n.id}">Ver más</a></button>
    </article>`
}