var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside')
var getPost = require('../ajax').getPost
var getCurrentUser = require('../ajax').getCurrentUser
var getNews = require('../ajax').getNew
var percentage = require('../votes_bar/get_percentage')

page('/app/noticia/:id', getNews, getCurrentUser, header, getPost, function (ctx, next) {
  require('../header/events')
  require('./comments_events')
  require('./noticia_events')

  $(document).ready(function () {
    percentage()
  })

  // coger id de la url para pedir ese post al json
  var id = document.URL.split('/').pop()
  window.scrollTo(0, 0)

  var main = document.getElementById('main-container')
  $(main).empty().append(template(ctx.post))
  next()
}, aside)
