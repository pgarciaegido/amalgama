var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')

page('/usuario/pegido/editar', header, function (ctx, next) {
  require('../header/events')
  var main = document.getElementById('main-container')
  $(main).empty().append(template)
})
