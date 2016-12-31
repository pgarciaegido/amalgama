var $ = require('jquery')

// ////// THIS FUNCTION INCREASES OR DECREASES THE VOTE COUNTER WHEN CLICKING A HANDLER

module.exports = function votesLiked (that, sign, votes, barNum, newHandler) {
  // --- Gets counter number through the class name
  debugger
  var counter = that.siblings()
  counter = counter.map(function () {
    if ($(this).attr('class').indexOf('counter') !== -1) {
      return this
    }
  })
  var temp = counter.text()

  // ----if the sign is positive, we add 1, otherwise, we substract 1

  var newNumber
  if (sign === true) {
    newNumber = Number(temp) + 1
  } else if (sign === false) {
    newNumber = Number(temp) - 1
  }
  counter.text(newNumber)

  // ------if the number is related directly with votes bar, change that numbers too

  if (barNum !== null) {
    $('.Votes_bar').find(barNum).html(newNumber)
  }
  that.css('display', 'none')
  that.siblings(newHandler).css('display', 'block')
}
