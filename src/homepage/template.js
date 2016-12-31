var yo = require('yo-yo')
var votesBar = require('../votes_bar/index')
var details = require('../details/index')
var feed = require('../feed/index')
var registrate = require('../registrate_cta/index')

module.exports = function (n, latest) {
	return yo`<div id="main">
  <section id="Latest" class="Latest">
    <h1 class="Latest-title">${n[latest].title}</h1>
      ${details(n[latest].date, n[latest].tags)}
    <h4 class="Latest-entradilla">${n.subtitle}</h4>
      ${votesBar(n[latest].agreeVotes, n[latest].disagreeVotes)}
    <button class="Latest-button"><a href="./noticia.html">Ver más</a></button>
  </section>
  ${registrate()}
  <div class="Feed">
  ${n.pop()}
  ${n.reverse().map(function (nw) {
    return feed(nw)
  })}
  </div>
</div>`
}
