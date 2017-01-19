import $             from 'jquery'
import votesLiked    from './votesLiked'
import getPercentage from '../votes_bar/get_percentage'

// ///////////////FUNCTIONS

// ---- Change the colors of button when clicked

function buttonClicked (button, clicked, color) {
  // -- Fits the height of the button and reduces 1 px when clicked (UX)
  let height = button.css('height')
  let heightClicked = height.substr(0, 2)
  heightClicked = (Number(heightClicked) - 1).toString().concat('px')
  let heightUnclicked = height.substr(0, 2)
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

const green = '#7ace7a'
const red = '#e13c42'


$(document).on('click', '#thumbup', function () {
  const v = require('./noticia_events_vars')
  votesLiked($(this), true, v.votesAgree, v.votesGreenNum, v.thumbUpLiked)
  buttonClicked(v.agreeBottom, false, green)

  getPercentage()
})

$(document).on('click', '#thumbup-liked', function () {
  const v = require('./noticia_events_vars')
  votesLiked($(this), false, v.votesAgree, v.votesGreenNum, v.thumbUp)
  buttonClicked(v.agreeBottom, true, green)

  getPercentage()
})

$(document).on('click', '#thumbdown', function () {
  const v = require('./noticia_events_vars')
  votesLiked($(this), true, v.votesDisagree, v.votesRedNum, v.thumbDownLiked)
  buttonClicked(v.disagreeBottom, false, red)

  getPercentage()
})

$(document).on('click', '#thumbdown-liked', function () {
  const v = require('./noticia_events_vars')
  votesLiked($(this), false, v.votesDisagree, v.votesRedNum, v.thumbDown)
  buttonClicked(v.disagreeBottom, true, red)

  getPercentage()
})

// ------Votes on clicking agree / disagree buttons

$(document).on('click', '#agree-button', function () {
  const v = require('./noticia_events_vars')
  if (v.thumbUp.css('display') === 'block') {
    votesLiked(v.thumbUp, true, v.votesAgree, v.votesGreenNum, v.thumbUpLiked)
    buttonClicked($(this), false, green)
  } else {
    votesLiked(v.thumbUpLiked, false, v.votesAgree, v.votesGreenNum, v.thumbUp)
    buttonClicked($(this), true, green)
  }

  getPercentage()
})

$(document).on('click', '#disagree-button', function () {
  const v = require('./noticia_events_vars')
  if (v.thumbDown.css('display') === 'block') {
    votesLiked(v.thumbDown, true, v.votesDisagree, v.votesRedNum, v.thumbDownLiked)
    buttonClicked($(this), false, red)
  } else {
    votesLiked(v.thumbDownLiked, false, v.votesDisagree, v.votesRedNum, v.thumbDown)
    buttonClicked($(this), true, red)
  }

  getPercentage()
})
