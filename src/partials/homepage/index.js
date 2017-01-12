var $ = require('jquery')
var page = require('page')

var template = require('./template')

var getNew = require('../ajax').getNew
var getCurrentUser = require('../ajax').getCurrentUser
var header = require('../header/index')

var articles = require('../feed/feed_events')
var percentage = require('../votes_bar/get_percentage')

var aside = require('../aside')

/**************HAY QUE CORREGIR LA FUNCION DE HOMEPAGE PARA QUE AÑADA AMBOS TEMPLATES ****/

// Homepage when not logged in

page('/invitado', header, getNew, function (ctx, next) {
  loadHomepage(ctx)
  next()
}, aside)

// Homepage when logged in

page('/app', getCurrentUser, header, getNew, function (ctx, next) {
  loadHomepage(ctx)
  next()
}, aside)

function loadHomepage(ctx) {
  require('../header/events')
  require('../noticia/noticia_events')
  require('../feed/feed_events')
  $(document).ready(function () {
    articles()
    percentage()
  })
  var main = document.getElementById('main-container')
  // we get the latest so we fill the latest" section with it
  var latest = ctx.news.length - 1
  var latestNew = ctx.news[latest]
  $(main).empty().append(template(ctx.news, latest))
  // Gets the element poped on template back to array, so we can use them all on the aside
  ctx.news.unshift(latestNew) 
}
