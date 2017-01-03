var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')
var getNew = require('../ajax/get_new')
var articles = require('../feed/feed_events')
var percentage = require('../votes_bar/get_percentage')

page('/', header, getNew, function (ctx, next) {
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
  next()
}, aside)
