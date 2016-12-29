var $ = require('jquery')
var page = require('page')
var template = require('./template')

page('/registrate', function(ctx, next) {
  var main = document.getElementById('main-container');
  $(main).empty().append(template);
})