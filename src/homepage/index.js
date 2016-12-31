var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')
var getNew = require('../ajax/get_new')

page('/', header, getNew, function (ctx, next) {
  require('../header/events')
  // gets the bars percentage done
  require('../noticia/noticia_events')
  var main = document.getElementById('main-container')
  // we get the latest so we fill the latest new withit
  var latest = ctx.news.length - 1
  $(main).empty().append(template(ctx.news, latest))
  next()
}, aside)
