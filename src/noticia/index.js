var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')

page('/noticia', header, getNews, function (ctx, next) {
  require('../header/events')
  require('./comments_events')
  require('./noticia_events')
  var main = document.getElementById('main-container')
  $(main).empty().append(template(ctx.news))
  next()
}, aside)

// ctx is an object!

function getNews (ctx, next) {
  $.get('/api/news', function (data) {
    // ctx is an object, then we add the news
    ctx.news = data
    next()
  })
}
