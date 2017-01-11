var $ = require('jquery')
var yo = require('yo-yo')

var orderTemas = require('./logics').order
var colorBalance = require('./logics').color

var mod = require('./modules')

module.exports = function aside (ctx) {
  var container = $('#main-container')
  var ordered = orderTemas(ctx.news)
  if (document.URL.indexOf('invitado') == -1) {
    var user = ctx.user
    container.append(userTemplate(ordered, user))
  } else {
    container.append(invitadoTemplate(ordered))
  }
  colorBalance()
}

var invitadoTemplate = function (news) {
  return yo`<aside id="aside">
  ${mod.register()}
  ${mod.temas(news)}
  ${mod.suscribe()}
  </aside>`
}

var userTemplate = function (news, user) {
  return yo`<aside id="aside">
  ${mod.profile(user)}
  ${mod.temas(news)}
  ${mod.suscribe()}
</aside>`
}
