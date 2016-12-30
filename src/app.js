var page = require('page')
var $ = require('jquery')

require('./homepage')
require('./noticia')
require('./usuario')
require('./usuario_editar')
require('./signup')
require('./login')

// $.get( "api/news", function( data ) {
//   console.log(data)
//   request = data
// 	console.log(request.title)
// });

page()
