import yo   from 'yo-yo'
import card from './comments_card'
import mod  from './modules'

// ///////// USUARIO TEMPLATE ///////////////////

module.exports = function userTemplate (user) {
  return yo`<div id="usuario">
  ${usuarioMain(user)}
  ${usuarioStatsAside()}
</div>`
}

// ***** Profile and comments are found in MODULES.JS

function usuarioMain (user) {
  return yo`<div class="Usuario_main">
    ${mod.usuarioProfile(user)}
    ${mod.usuarioComments()}
  </div>`
}

// ** The stats of the user appear here, and in the
function usuarioStatsAside () {
  return yo`<div class="Usuario_aside">
    <div class="Usuario_aside-stats">
      <div class="Usuario_aside-stats-comments">
        <h3 class="Usuario_aside-stats-comments-counter">17</h3>
        <span class="Usuario_aside-stats-comments-text">Comentarios</span>
      </div>
      <div class="Usuario_aside-stats-thumbsup">
        <h3 class="Usuario_aside-stats-thumbsup-counter">17</h3>
        <span class="Usuario_aside-stats-thumbsup-text">Valoraciones</span>
      </div>
    </div>
  </div>`
}
