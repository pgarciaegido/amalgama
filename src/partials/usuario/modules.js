import yo   from 'yo-yo'
import card from './comments_card'

// //////////// USUARIO MODULES ///////////////

module.exports = {
  usuarioProfile,
  usuarioComments,
  sortedComments,
  getLikes
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
      <a href="/app/editar/${user.username}" class="Usuario_main_profile-info-editar">Editar perfil</a>
    </div>
  </div>`
}

function usuarioComments (comments) {
  return yo`<div class="Usuario_main_comments">
      ${usuarioStats(comments)}
      ${usuarioCommentsHeader()}
      ${usuarioCommentsContainer(comments)}
    </div>`
}

// ************ SUBMODULES FOR THE COMMENTS SECTION

// User stats displayed in mobile and tablets
function usuarioStats (comments) {
  return yo`<div class="Usuario_main_comments-stats">
        <div class="Usuario_main_comments-stats-comments">
          <h3 class="Usuario_main_comments-stats-comments-counter">${comments.length}</h3>
          <span class="Usuario_main_comments-stats-comments-text">Comentarios</span>
        </div>
        <div class="Usuario_main_comments-stats-thumbsup">
          <h3 class="Usuario_main_comments-stats-thumbsup-counter">${getLikes(comments)}</h3>
          <span class="Usuario_main_comments-stats-thumbsup-text">Valoraciones</span>
        </div>
      </div>`
}

function usuarioCommentsHeader () {
  return yo`<div class="Usuario_main_comments-header">
        <h2 class="Usuario_main_comments-header-title">Mis comentarios</h2>
        <div class="Usuario_main_comments-header-order">
          <button id="usuario-sort-likes" class="Usuario_main_comments-header-order-votes">Más votados</button>
          <button id="usuario-sort-date" class="Usuario_main_comments-header-order-new sort-comments-active">Más nuevos</button>
        </div>
      </div>`
}

// card is required in another file

function usuarioCommentsContainer (comments) {
  return yo`<div id="usuario-comments-container" class="Usuario_main_comments-container">
  ${comments.map((com) => {
    return card(com)
  })}
  </div>`
}

function sortedComments (comments) {
  return yo`${comments.map((com) => {
    return card(com)
  })}`
}

function getLikes (comments) {
  let counter = 0
  for (let i in comments){
    counter += comments[i].likes
  }
  return counter
}
