require('jquery')

module.exports = function votesLiked (that, sign, votes, barNum, newHandler) {
  var parent = that.parent() // Gets parent, looks for child either with an id or a class
  var id = votes.attr('id')
  var id_ = '#' + id
  var clss = '.' + votes.attr('class')
  var attr, newNumber
  if (id === undefined) { attr = clss }
  else { attr = id_ }
  var counter = parent.find(attr)
  var temp = counter.text()

  if (sign === true)
    newNumber = Number(temp) + 1
  else if (sign === false)
    newNumber = Number(temp) - 1
  counter.text(newNumber)
  if (barNum !== null)
    barNum.text(newNumber)
  console.log(newNumber)
  that.css('display', 'none')
  that.siblings(newHandler).css('display', 'block')
}
