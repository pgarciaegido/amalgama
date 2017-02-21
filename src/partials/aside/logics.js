import $ from 'jquery'

module.exports = { colorBalance }

// If the balance is positive, color = green
function colorBalance () {
  $('.Aside_temas-tema').each(function () {
    let balance = $(this).find($('.Aside_temas-tema-info-balance'))
    if (balance.html().charAt(0) !== '-') {
      balance.css('color', '#7ace7a')
    }
  })
}
