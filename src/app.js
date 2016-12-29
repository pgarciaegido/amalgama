var page = require('page')
var $ = require('jquery')
// require('pug')

require('./homepage')
require('./noticia')
require('./usuario')
require('./usuario_editar')
require('./signup')
require('./login')


$.get( "api/user/pegido", function( data ) {
  console.log(data.email)
  alert( "Load was performed." );
});

page()