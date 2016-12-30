var $ = require('jquery')
var votesLiked = require('./votesLiked')

// ///////////////FUNCTIONS

// ------ Get porcentage of the votes bar and adjust it acording to the vote number

function getPercentage () {
  var v = require('./noticia_events_vars')
  var agree = Number(v.votesAgree.text())
  var total = agree + Number(v.votesDisagree.text())
  var percentage = agree / total * 100
  v.votesBar.css('width', percentage + '%')
}

// ---- Call the function so its done on loading
$(document).ready(function () {
  getPercentage()
})

// ---- Change the colors of button when clicked

function buttonClicked (button, clicked, color) {
  // -- Fits the height of the button and reduces 1 px when clicked (UX)
  var height = button.css('height')
  var heightClicked = height.match(/\d/g).join('')
  heightClicked = (Number(heightClicked) - 1).toString().concat('px')
  var heightUnclicked = height.match(/\d/g).join('')
  heightUnclicked = (Number(heightUnclicked) + 1).toString().concat('px')

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

$(document).on('click', '#thumbup', function () {
  var v = require('./noticia_events_vars')
  votesLiked($(this), true, v.votesAgree, v.votesGreenNum, v.thumbUpLiked)
  buttonClicked(v.agreeBottom, false, '#7ace7a')
  getPercentage()
})

$(document).on('click', '#thumbup-liked', function () {
  var v = require('./noticia_events_vars')
  votesLiked($(this), false, v.votesAgree, v.votesGreenNum, v.thumbUp)
  buttonClicked(v.agreeBottom, true, '#7ace7a')
  getPercentage()
})

$(document).on('click', '#thumbdown', function () {
  var v = require('./noticia_events_vars')
  votesLiked($(this), true, v.votesDisagree, v.votesRedNum, v.thumbDownLiked)
  buttonClicked(v.disagreeBottom, false, '#e13c42')
  getPercentage()
})

$(document).on('click', '#thumbdown-liked', function () {
  var v = require('./noticia_events_vars')
  votesLiked($(this), false, v.votesDisagree, v.votesRedNum, v.thumbDown)
  buttonClicked(v.disagreeBottom, true, '#e13c42')
  getPercentage()
})

// ------Votes on clicking agree / disagree buttons

$(document).on('click', '#agree-button', function () {
  var v = require('./noticia_events_vars')
  if (v.thumbUp.css('display') === 'block') {
    votesLiked(v.thumbUp, true, v.votesAgree, v.votesGreenNum, v.thumbUpLiked)
    buttonClicked($(this), false, '#7ace7a')
  } else {
    votesLiked(v.thumbUpLiked, false, v.votesAgree, v.votesGreenNum, v.thumbUp)
    buttonClicked($(this), true, '#7ace7a')
  }
  getPercentage()
})

$(document).on('click', '#disagree-button', function () {
  var v = require('./noticia_events_vars')
  if (v.thumbDown.css('display') === 'block') {
    votesLiked(v.thumbDown, true, v.votesDisagree, v.votesRedNum, v.thumbDownLiked)
    buttonClicked($(this), false, '#e13c42')
  } else {
    votesLiked(v.thumbDownLiked, false, v.votesDisagree, v.votesRedNum, v.thumbDown)
    buttonClicked($(this), true, '#e13c42')
  }
  getPercentage()
})

