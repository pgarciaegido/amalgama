import $ from 'jquery'
import {sortComments} from './modules'

// Reappends another array with reordered comments, date or likes
module.exports = function sort (e) {
  // Require DOM elements and comments
  const v = require('./comments_events_vars')
  const c = require('./index')

  let thisData = $(this).attr('data-side') //agree / disagree
  let thisSort = $(this).attr('data-sort') // date / likes
  let container = $(`#noticia-comments-container-${thisData}`)
  let comments, sibling

  if (thisData === 'agree'){
    if (thisSort === 'date') {
      comments = c.commentsAgree
      sibling = v.buttonLikesAgree
    }
    else if (thisSort === 'likes') {
      comments = c.commentsAgreeLikes
      sibling = v.buttonDateAgree
    }
  }
  else if (thisData === 'disagree') {
    if (thisSort === 'date') {
      comments = c.commentsDisagree
      sibling = v.buttonLikesDisagree
    }
    else if (thisSort === 'likes') {
      comments = c.commentsDisagreeLikes
      sibling = v.buttonDateDisagree
    }
  }

  clickSort(e, c.user, comments, container)
  // For styling purposes
  $(this).addClass('sort-comments-active')
  sibling.removeClass('sort-comments-active')
}

function clickSort (e, user, userCom, container) {
	e.preventDefault()
	container.empty().append(sortComments(user, userCom))
}
