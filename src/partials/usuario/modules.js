var yo = require('yo-yo')
var card = require('./comments_card')

// //////////// USUARIO MODULES ///////////////

module.exports = {
  profile: usuarioProfile,
  comments: usuarioComments
}

function usuarioProfile (user) {
  return yo`<div class="Usuario_main_profile">
    <div class="Usuario_main_profile-avatar">
      <img src="/img/avatar.jpg" alt="avatar" />
    </div>
    <div class="Usuario_main_profile-info">
      <div class="Usuario_main_profile-info-main">
        <h2 class="Usuario_main_profile-info-main-username">${user.username}</h2>
        <h3 class="Usuario_main_profile-info-main-location">Oviedo</h3>
      </div>
      <div class="Usuario_main_profile-info-links">
        <a href="#" class="Usuario_main_profile-info-links-facebook"><img src="/img/facebook.svg" alt=""></a>
        <a href="#" class="Usuario_main_profile-info-links-twitter"><img src="/img/twitter.svg" alt=""></a>
        <a href="#" class="Usuario_main_profile-info-links-linkedin"><img src="/img/linkedin.svg" alt=""></a>
      </div>
      <button class="Usuario_main_profile-info-editar">Editar perfil</button>
    </div>
  </div>`
}

function usuarioComments () {
  return yo`<div class="Usuario_main_comments">
      ${usuarioStats()}
      ${usuarioCommentsHeader()}
      ${usuarioCommentsContainer()}
    </div>`
}

// ************ SUBMODULES FOR THE COMMENTS SECTION

function usuarioStats () {
  return yo`<div class="Usuario_main_comments-stats">
        <div class="Usuario_main_comments-stats-comments">
          <h3 class="Usuario_main_comments-stats-comments-counter">17</h3>
          <span class="Usuario_main_comments-stats-comments-text">Comentarios</span>
        </div>
        <div class="Usuario_main_comments-stats-thumbsup">
          <h3 class="Usuario_main_comments-stats-thumbsup-counter">17</h3>
          <span class="Usuario_main_comments-stats-thumbsup-text">Valoraciones</span>
        </div>
      </div>`
}

function usuarioCommentsHeader () {
  return yo`<div class="Usuario_main_comments-header">
        <h2 class="Usuario_main_comments-header-title">Mis comentarios</h2>
        <div class="Usuario_main_comments-header-order">
          <button class="Usuario_main_comments-header-order-votes">Más votados</button>
          <button class="Usuario_main_comments-header-order-new">Más nuevos</button>
        </div>
      </div>`
}

// card is required in another file

function usuarioCommentsContainer () {
  return yo`<div class="Usuario_main_comments-container">
    ${card()}
  </div>`
}