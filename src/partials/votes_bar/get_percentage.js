var $ = require('jquery')

module.exports = function getPercentage () {
  $('.Votes_bar').each(function (i, obj) {
    var agree = Number($(obj).find($('.Votes_bar-numbers-green')).html())
    var disagree = Number($(obj).find($('.Votes_bar-numbers-red')).html())
    var total = agree + disagree
    var percentage = agree / total * 100
    $(obj).find($('.Votes_bar-colors-green')).css('width', percentage + '%')
  })
}
