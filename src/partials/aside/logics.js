import $ from 'jquery'

module.exports = { orderTemas, colorBalance }

// Get the total number of votes, and ordering it so it shows from higher to lower.
function orderTemas (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i].total = arr[i].agreeVotes + arr[i].disagreeVotes
    arr[i].balance = arr[i].agreeVotes - arr[i].disagreeVotes
  }
  let byTotal = arr.slice(0)
  byTotal.sort(function (a, b) {
    return b.total - a.total
  })
  return byTotal
}

// If the balance is positive, color = green
function colorBalance () {
  $('.Aside_temas-tema').each(function () {
    let balance = $(this).find($('.Aside_temas-tema-info-balance'))
    if (balance.html().charAt(0) !== '-') {
      balance.css('color', '#7ace7a')
    }
  })
}
