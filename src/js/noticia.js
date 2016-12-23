var $ = require('jquery')
var votesLiked = require ('./votesLiked')

var $thumbUp = $('.Noticia_comentarios-comentarios-agree-header-icon')
var $thumbUpLiked = $('.Noticia_comentarios-comentarios-agree-header-icon-liked')

var $thumbDown = $('.Noticia_comentarios-comentarios-disagree-header-icon')
var $thumbDownLiked = $('.Noticia_comentarios-comentarios-disagree-header-icon-liked')

var $agreeBottom = $('.Noticia_comentarios-comentarios-buttons-agree')
var $disagreeBottom = $('.Noticia_comentarios-comentarios-buttons-disagree')

var $votesAgree = $('.Noticia_comentarios-comentarios-agree-header-votes')
var $votesDisagree = $('.Noticia_comentarios-comentarios-disagree-header-votes')

var $votesBar = $('.Votes_bar-colors-green')
var $votesGreenNum = $('.Votes_bar-numbers-green')
var $votesRedNum = $('.Votes_bar-numbers-red')

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
  votesLiked($(this), true, $votesAgree, $votesGreenNum, $thumbUpLiked)
  getPercentage()
})

$thumbUpLiked.on('click', function () {
  votesLiked($(this), false, $votesAgree, $votesGreenNum, $thumbUp)
  getPercentage()
})

$thumbDown.on('click', function () {
  votesLiked($(this), true, $votesDisagree, $votesRedNum, $thumbDownLiked)
  getPercentage()
})

$thumbDownLiked.on('click', function () {
  votesLiked($(this), false, $votesDisagree, $votesRedNum, $thumbDown)
  getPercentage()
})

$agreeBottom.on('click', function () {
  if($thumbUp.css('display') == 'block'){
    votesLiked($thumbUp, true, $votesAgree, $votesGreenNum, $thumbUpLiked)
  }
  else{
    votesLiked($thumbUpLiked, false, $votesAgree, $votesGreenNum, $thumbUp)
  }
})

$disagreeBottom.on('click', function () {
  if($thumbDown.css('display') == 'block'){
    votesLiked($thumbDown, true, $votesDisagree, $votesRedNum, $thumbDownLiked)
  }
  else{
    votesLiked($thumbDownLiked, false, $votesDisagree, $votesRedNum, $thumbDown)
  }
})

