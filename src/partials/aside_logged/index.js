var $ = require('jquery')
var yo = require('yo-yo')
var masVotados = require('../aside/mas_votados')
var orderTemas = require('../aside/logics').order
var colorBalance = require('../aside/logics').color

module.exports = function (ctx) {
  var container = $('#main-container')
  var ordered = orderTemas(ctx.news)
  var user = ctx.user
  container.append(el(ordered, user))
  colorBalance()
}

var el = function (news, user) {
  return yo`<aside id="aside">
  <div class="Aside_profile">
    <h2 class="Aside_profile-title">Mi perfil</h2>
    <img src="/img/avatar.jpg" alt="avatar" class="Aside_profile-avatar" />
    <h3 class="Aside_profile-username">${user.username}</h3>
    <div class="Aside_profile-buttons">
      <button class="Aside_profile-buttons-edit">Editar</button>
      <button class="Aside_profile-buttons-logout">Cerrar sesión</button>
    </div>
  </div>
  <div class="Aside_temas">
    <h2 class="Aside_temas-title">Temas más votados</h2>
    ${news.map(function (nw) {
      return masVotados (nw)
    })}
  </div>
  <div class="Aside_subscribe">
    <h2 class="Aside_subscribe-title">¡Suscríbete</h2>
    <p class="Aside_subscribe-subtitle">Suscríbete y te enviaremos un email cuando haya una nueva entrada. No te enviaremos publicidad, ni daremos tus datos a nadie. Palabra.</p>
    <form action="" class="Aside_subscribe-form">
      <label for="" class="Aside_subscribe-form-label">Email:<input type="email" placeholder="ejemplo@gmail.com"></label>
      <input class="Aside_subscribe-form-button"type="submit" value="¡Regístrame!">
    </form>
  </div>
</aside>`
}
