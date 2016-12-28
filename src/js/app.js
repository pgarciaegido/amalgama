var $ = require('jquery')
require('./navbar')
require('./noticia')
require('./comments')
var header = require('../header/index')
var yo = require('yo-yo')

var page = require('page')

page('/', header, function(ctx, next){
	require('../header/events')
	function morts (){alert('tus muertos')}
	var rend = yo`<h1>ahhashkasdbhs</h1>`
	rend.addEventListener('click', morts)
  var main = document.getElementById('main-container');
  main.append(rend);
})

page()
