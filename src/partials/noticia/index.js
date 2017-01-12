var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside')
var getNew = require('../ajax').getNew
var getCurrentUser = require('../ajax').getCurrentUser
var percentage = require('../votes_bar/get_percentage')

page('/app/noticia/:id', getCurrentUser, header, getNew, function (ctx, next) {
  require('../header/events')
  require('./comments_events')
  require('./noticia_events')

  $(document).ready(function () {
    percentage()
  })

  // coger id de la url para pedir ese post al json
  var id = document.URL.split('/').pop()
  window.scrollTo(0, 0);

  var main = document.getElementById('main-container')
  $(main).empty().append(template(ctx.news[id]))
  next()
}, aside)
