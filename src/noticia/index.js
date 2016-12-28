var $ = require('jquery')
var header = require('../header/index')
var page = require('page')
var template = require('./template')
var aside = require('../aside/index')

page('/noticia', header,  function(ctx, next){
	require('../header/events')
	require('./comments_events')
	require('./noticia_events')
  var main = document.getElementById('main-container');
  $(main).empty().append(template);
  next()
}, aside)