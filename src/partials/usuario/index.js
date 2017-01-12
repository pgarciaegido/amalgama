var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var getCurrentUser = require('../ajax').getCurrentUser

page('/app/usuario/:username', getCurrentUser, header, function (ctx, next) {
	var user = ctx.user
	require('../header/events')
  var main = document.getElementById('main-container')
  $(main).empty().append(template(user))
})
