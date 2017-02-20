import yo   from 'yo-yo'
import card from './comments_card'
import mod  from './modules'

// ///////// USUARIO TEMPLATE ///////////////////

module.exports = function userTemplate (user, comments) {
  return yo`<div id="usuario">
  ${usuarioMain(user, comments)}
  ${usuarioStatsAside(comments)}
</div>`
}

// ***** Profile and comments are found in MODULES.JS

function usuarioMain (user, comments) {
  return yo`<div class="Usuario_main">
    ${mod.usuarioProfile(user)}
    ${mod.usuarioComments(comments)}
  </div>`
}

// ** The stats of the user appear here, and in the main section, only on mobile and tablet
function usuarioStatsAside (comments) {
  return yo`<div class="Usuario_aside">
    <div class="Usuario_aside-stats">
      <div class="Usuario_aside-stats-comments">
        <h3 class="Usuario_aside-stats-comments-counter">${comments.length}</h3>
        <span class="Usuario_aside-stats-comments-text">Comentarios</span>
      </div>
      <div class="Usuario_aside-stats-thumbsup">
        <h3 class="Usuario_aside-stats-thumbsup-counter">??</h3>
        <span class="Usuario_aside-stats-thumbsup-text">Valoraciones</span>
      </div>
    </div>
  </div>`
}
