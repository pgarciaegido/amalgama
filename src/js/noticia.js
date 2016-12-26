var $ = require('jquery')
var votesLiked = require('./votesLiked')

var $thumbUp = $('.Noticia_comentarios-comentarios-agree-header-votes-icon')
var $thumbUpLiked = $('.Noticia_comentarios-comentarios-agree-header-votes-icon-liked')

var $thumbDown = $('.Noticia_comentarios-comentarios-disagree-header-votes-icon')
var $thumbDownLiked = $('.Noticia_comentarios-comentarios-disagree-header-votes-icon-liked')

var $agreeBottom = $('.Noticia_comentarios-comentarios-buttons-agree')
var $disagreeBottom = $('.Noticia_comentarios-comentarios-buttons-disagree')

var $votesAgree = $('.Noticia_comentarios-comentarios-agree-header-votes-counter')
var $votesDisagree = $('.Noticia_comentarios-comentarios-disagree-header-votes-counter')

var $votesBar = $('.Votes_bar-colors-green')
var $votesGreenNum = $('.Votes_bar-numbers-green')
var $votesRedNum = $('.Votes_bar-numbers-red')

// ///////////////FUNCTIONS

// ------ Get porcentage of the votes bar and adjust it acording to the vote number

function getPercentage () {
  var agree = Number($votesAgree.text())
  var total = agree + Number($votesDisagree.text())
  var percentage = agree / total * 100
  $votesBar.css('width', percentage + '%')
}

// ---- Call the function so its done on loading

getPercentage()

// ---- Change the colors of button when clicked

function buttonClicked (button, clicked, color) {
  // -- Fets the height of the button and reduces 1 px when clicked (UX)
  var height = button.css('height')
  var heightClicked = height.match(/\d/g).join('')
  heightClicked = (Number(heightClicked) - 1).toString().concat('px')
  var heightUnclicked = height.match(/\d/g).join('')
  heightUnclicked = (Number(heightUnclicked) + 1).toString().concat('px')

  console.log(heightClicked)
  if (clicked === false) {
    button.css({'background': '#f1f1f1',
                'color': color,
                'border': '2px solid' + color,
                'height': heightClicked})
  } else if (clicked === true) {
    button.css({'background': color,
                'color': 'white',
                'border': 'none',
                'height': heightUnclicked})
  }
}

// ////////Event handlers (the parameters are passed this way, otherwise ill be triggered on reload)

// ----- Votes on clicking the thumb up/down icon

$thumbUp.on('click', function () {
  votesLiked($(this), true, $votesAgree, $votesGreenNum, $thumbUpLiked)
  buttonClicked($agreeBottom, false, '#7ace7a')
  getPercentage()
})

$thumbUpLiked.on('click', function () {
  votesLiked($(this), false, $votesAgree, $votesGreenNum, $thumbUp)
  buttonClicked($agreeBottom, true, '#7ace7a')
  getPercentage()
})

$thumbDown.on('click', function () {
  votesLiked($(this), true, $votesDisagree, $votesRedNum, $thumbDownLiked)
  buttonClicked($disagreeBottom, false, '#e13c42')
  getPercentage()
})

$thumbDownLiked.on('click', function () {
  votesLiked($(this), false, $votesDisagree, $votesRedNum, $thumbDown)
  buttonClicked($disagreeBottom, true, '#e13c42')
  getPercentage()
})

// ------Votes on clicking agree / disagree buttons

$agreeBottom.on('click', function () {
  if ($thumbUp.css('display') === 'block') {
    votesLiked($thumbUp, true, $votesAgree, $votesGreenNum, $thumbUpLiked)
    buttonClicked($agreeBottom, false, '#7ace7a')
  } else {
    votesLiked($thumbUpLiked, false, $votesAgree, $votesGreenNum, $thumbUp)
    buttonClicked($agreeBottom, true, '#7ace7a')
  }
  getPercentage()
})

$disagreeBottom.on('click', function () {
  if ($thumbDown.css('display') === 'block') {
    votesLiked($thumbDown, true, $votesDisagree, $votesRedNum, $thumbDownLiked)
    buttonClicked($disagreeBottom, false, '#e13c42')
  } else {
    votesLiked($thumbDownLiked, false, $votesDisagree, $votesRedNum, $thumbDown)
    buttonClicked($disagreeBottom, true, '#e13c42')
  }
  getPercentage()
})

