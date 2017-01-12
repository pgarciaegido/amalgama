var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')

page('/accede', header, function (ctx, next) {
  require('../header/events')
  var main = document.getElementById('main-container')
  if ($('body').height() < window.innerHeight) {
    $('body').css('overflow', 'hidden')
  }
  $(main).empty().append(template)
})
