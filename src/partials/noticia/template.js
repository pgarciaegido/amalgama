import yo       from 'yo-yo'
import votesBar from '../votes_bar/index'
import mod      from './modules'

// The first argument is the post info
// Second is the loggedin user information
// Third is the list of comments agreeing with this post
// Fourth is the list of comments disagreeing with this post
module.exports = function (n, u, cA, cD) {
  return yo`<div id="noticia_main">
  ${mod.noticiaCuerpo(n)}
  ${mod.noticiaInformate(n)}
  ${mod.noticiaComentarios(n, u, cA, cD)}
  ${votesBar(n.agreeVotes, n.disagreeVotes)}
</div>`
}
