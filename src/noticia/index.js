var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')
var getNew = require('../ajax/get_new')
var percentage = require('../votes_bar/get_percentage')

page('/noticia/:id', header, getNew, function (ctx, next) {
  require('../header/events')
  require('./comments_events')
  require('./noticia_events')

  $(document).ready(function () {
    percentage()
  })

  // coger id de la url para pedir ese post al json
  var url = window.location.href.split('/')
  var id = url[4]

  window.scrollTo(0, 0);

  var main = document.getElementById('main-container')
  $(main).empty().append(template(ctx.news[id]))
  next()
}, aside)
