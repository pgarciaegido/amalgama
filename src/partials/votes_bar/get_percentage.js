import $ from 'jquery'

module.exports = function getPercentage () {
  $('.Votes_bar').each((i, obj) => {
    let agree = Number($(obj).find($('.Votes_bar-numbers-green')).html())
    let disagree = Number($(obj).find($('.Votes_bar-numbers-red')).html())
    let total = agree + disagree
    let percentage = agree / total * 100
    $(obj).find($('.Votes_bar-colors-green')).css('width', percentage + '%')
  })
}
