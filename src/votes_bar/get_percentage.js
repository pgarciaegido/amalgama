var $ = require('jquery')

module.exports = function getPercentage (agree, disagree) {
  var total = agree + disagree
  var percentage = agree / total * 100
  $('.Votes_bar-colors-green').css('width', percentage + '%')
}
