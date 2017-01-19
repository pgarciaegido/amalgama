import yo       from 'yo-yo'
import votesBar from '../votes_bar/index'
import mod      from './modules'

module.exports = function (n) {
  return yo`<div id="noticia_main">
  ${mod.noticiaCuerpo(n)}
  ${mod.noticiaInformate()}
  ${mod.noticiaComentarios(n)}
  ${votesBar(n.agreeVotes, n.disagreeVotes)}
</div>`
}
