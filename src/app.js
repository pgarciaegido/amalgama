var page = require('page')
var $ = require('jquery')
var articles = require('./partials/feed/feed_events')
var percentage = require('./partials/votes_bar/get_percentage')

require('./partials/homepage')
require('./partials/noticia')
require('./partials/usuario')
require('./partials/usuario_editar')
require('./partials/signup')
require('./partials/login')

$(document).ready(function () {
  articles()
  percentage()
})

page()
