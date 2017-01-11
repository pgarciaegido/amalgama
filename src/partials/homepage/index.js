var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')
var getNew = require('../ajax/get_new')
var articles = require('../feed/feed_events')
var percentage = require('../votes_bar/get_percentage')

var getCurrentUser = require('../ajax/get_current_user')
var headerLogged = require('../header/index_logged')
var templateLogged = require('./template_logged')
var asideLogged = require('../aside/index_logged')

// Homepage when not logged in

page('/invitado', header, getNew, function (ctx, next) {
  loadHomepage(ctx)
  next()
}, aside)

// Homepage when logged in

page('/app', getCurrentUser, headerLogged, getNew, function (ctx, next) {
  loadHomepage(ctx)
  next()
}, asideLogged)

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
  $(main).empty().append(templateLogged(ctx.news, latest))
  // Gets the element poped on template back to array, so we can use them all on the aside
  ctx.news.unshift(latestNew) 
}
