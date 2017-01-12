var yo = require('yo-yo')
var votesBar = require('../votes_bar/index')
var mod = require('./modules')

module.exports = function (n) {
  return yo`<div id="noticia_main">
  ${mod.cuerpo(n)}
  ${mod.informate()}
  ${mod.comentarios(n)}
  ${votesBar(n.agreeVotes, n.disagreeVotes)}
</div>`
}
