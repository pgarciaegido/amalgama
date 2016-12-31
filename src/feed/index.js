var yo = require('yo-yo')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')

module.exports = function (n) {
	return yo`<article class="Feed-article">
      <h2 class="Feed-article-title">${n.title}</h2>
        ${details(n.date, n.tags)}
      <div class="Feed-article-bars">
        ${votesBar(n.agreeVotes, n.disagreeVotes)}
      </div>
      <button class="Feed-article-button">Ver más</button>
    </article>`
}