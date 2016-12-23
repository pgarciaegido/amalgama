var $ = require ('jquery')

module.exports = function votesLiked (sign, votes, barNum, newHandler) {
	var target = event.currentTarget // Gets just the button clicked (similar to This)
	target = $(target) // Transform DOM element into jQuery object

	var parent = target.parent() // Gets parent, looks for child either with an id or a class
  var id = votes.attr('id')
  var id_ = "#" + id
  var clss = "." + votes.attr('class')
  var attr;
  if(id == undefined){ attr = clss }
  else{ attr = id_ }
  var counter = parent.find(attr)
  var temp = counter.text()

  if (sign == true)
    var newNumber = Number(temp) + 1
  else if (sign == false)
    var newNumber = Number(temp) - 1
  counter.text(newNumber)
  if(barNum !== null)
  	barNum.text(newNumber)
  target.css('display', 'none')
  target.siblings(newHandler).css('display', 'block')

}