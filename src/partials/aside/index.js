var $ = require('jquery')
var yo = require('yo-yo')
var masVotados = require('./mas_votados')
var orderTemas = require('./logics').order
var colorBalance = require('./logics').color

module.exports = function (ctx) {
  var container = $('#main-container')
  var ordered = orderTemas(ctx.news)
  container.append(el(ordered))
  colorBalance()
}

var el = function (news) {
  return yo`<aside id="aside">
  <div class="Aside_registrate">
    <h2 class="Aside_registrate-title">Regístrate</h2>
    <p class="Aside_registrate-subtitle">
      Únete a la comunidad, vota y comparte tu opinión. ¡Queremos escucharte!
    </p>
    <form class="Aside_registrate-form" action="/usersignup" method="POST">
      <label for="">Nombre usuario: 
        <input name ="username" type="text">
      </label>
      <label for="">Email: 
        <input name="email" type="email">
      </label>
      <label for="">Contraseña: 
        <input name="password" type="password">
      <label for="">Repita la contraseña: 
        <input name="password_confirmation" type="password">
      </label>
      <input class="Aside_registrate-form-button" type="submit" value="Regístrate">
    </form>
    <button class="Aside_registrate-facebook">Regístrate con Facebook</button>
    <button class="Aside_registrate-google">Regístrate con Google</button>
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
