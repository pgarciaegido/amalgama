var $ = require('jquery')
var yo = require('yo-yo')
var masVotados = require('./mas_votados')
var getNews = require('../ajax/get_new')

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
    <form class="Aside_registrate-form" action="">
      <label for="">Nombre usuario: 
        <input type="text">
      </label>
      <label for="">Email: 
        <input type="email">
      </label>
      <label for="">Contraseña: 
        <input type="password">
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

// Get the total number of votes, and ordering it so it shows from higher to lower. 
function orderTemas (arr) {
  for (var i = 0; i< arr.length; i++) {  
    arr[i].total = arr[i].agreeVotes + arr[i].disagreeVotes
    arr[i].balance = arr[i].agreeVotes - arr[i].disagreeVotes
  }
  var byTotal = arr.slice(0)
  byTotal.sort(function (a, b) {
    return b.total - a.total;
  })
  return byTotal
}

// If the balance is positive, color = green
function colorBalance () {
  $('.Aside_temas-tema').each(function () {
    var balance = $(this).find($('.Aside_temas-tema-info-balance'))
    if (balance.html().charAt(0) !== '-'){
      balance.css('color', '#7ace7a')
    }
  })
}