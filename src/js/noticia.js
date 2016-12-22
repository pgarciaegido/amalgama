var $ = require('jquery')

var $thumbUp = $('.Noticia_comentarios-comentarios-up-header-icon')
var $thumbDown = $('.Noticia_comentarios-comentarios-down-header-icon')

var $votesAgree = $('.Noticia_comentarios-comentarios-up-header-votes')
var $votesDisagree = $('.Noticia_comentarios-comentarios-down-header-votes')

var $votesBar = $('.Votes_bar-colors-green')
var $votesGreenNum = $('.Votes_bar-numbers-green')
var $votesRedNum = $('.Votes_bar-numbers-red')

function votesUp (votes, barNum) {
  var temp = votes.text()
  var newNumber = Number(temp) + 1
  votes.text(newNumber)
  barNum.text(newNumber)
}

function getPercentage () {
  var agree = Number($votesAgree.text())
  var total = agree + Number($votesDisagree.text())
  var percentage = agree / total * 100
  $votesBar.css('width', percentage + '%')
}

// Sets the bar width first.
getPercentage()

// Event handlers (the parameters are passed this way, otherwise ill be triggered on reload)

$thumbUp.on('click', function () {
  votesUp($votesAgree, $votesGreenNum)
  getPercentage()
})

$thumbDown.on('click', function () {
  votesUp($votesDisagree, $votesRedNum)
  getPercentage()
})

