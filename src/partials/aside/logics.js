var $ = require('jquery')

// Get the total number of votes, and ordering it so it shows from higher to lower. 
module.exports.order = function orderTemas (arr) {
  for (var i = 0; i< arr.length; i++) {  
    arr[i].total = arr[i].agreeVotes + arr[i].disagreeVotes
    arr[i].balance = arr[i].agreeVotes - arr[i].disagreeVotes
  }
  var byTotal = arr.slice(0)
  byTotal.sort(function (a, b) {
    return b.total - a.total;
  })
  return byTotal
}

// If the balance is positive, color = green
module.exports.color = function colorBalance () {
  $('.Aside_temas-tema').each(function () {
    var balance = $(this).find($('.Aside_temas-tema-info-balance'))
    if (balance.html().charAt(0) !== '-'){
      balance.css('color', '#7ace7a')
    }
  })
}