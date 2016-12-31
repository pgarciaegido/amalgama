var page = require('page')
var $ = require('jquery')
var articles = require('./feed/feed_events')
var percentage = require('./votes_bar/get_percentage')

require('./homepage')
require('./noticia')
require('./usuario')
require('./usuario_editar')
require('./signup')
require('./login')

$(document).ready(function () {
  articles()
  percentage()
})

page()
