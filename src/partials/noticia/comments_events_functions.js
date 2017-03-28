import $           from 'jquery'
import { comCard } from './modules'
import votesLiked  from './votesLiked'
import moment      from 'moment'
import yo          from 'yo-yo'

module.exports = {
  createShow,
  createHide,
  commentAgree,
  commentDisagree,
  commentCloseAgree,
  commentCloseDisagree,
  commentsMobile,
  ajaxVote
}

// //////////////////////////// Functions

// ---- Displays textarea
// Adds class to the div container of the whole structure, to it displays nicely
// then removes the overflow on the div containing the list of comments
// removes que Id of the button, so we can add it on an event listener close
function createShow (create, comment, button) {
  create.addClass('create-comment-opened')
  comment.scrollTop(0).css('overflow-y', 'hidden')
  button.removeAttr('id')
}

// --- Opens input in agree
// Requires the DOM elements
// Calls createShow
// Gives the 'open' comment button an id so now is used to closeit
function commentAgree () {
  const v = require('./comments_events_vars')
  createShow(v.createAgree, v.commentsAgree, v.comentarAgree)
  v.comentarAgree.attr('id', 'comentar-closeagree')
  v.comentarAgree.html('Cerrar')
}

// Opens input in disagree
function commentDisagree () {
  const v = require('./comments_events_vars')
  createShow(v.createDisagree, v.commentsDisagree, v.comentarDisagree)
  v.comentarDisagree.attr('id', 'comentar-closedisagree')
  v.comentarDisagree.html('Cerrar')
}

// ---- Hide textarea
// The logics are the same than for opening but the other way around
function createHide (create, comment, textarea, button) {
  create.removeClass('create-comment-opened')
  comment.css('overflow-y', 'scroll')
  // empties the textarea
  textarea.val('')
  button.removeAttr('id')
}

function commentCloseAgree () {
  const v = require('./comments_events_vars')
  createHide(v.createAgree, v.commentsAgree, v.textAgree, v.comentarAgree)
  v.comentarAgree.attr('id', 'comentar-agree')
  v.comentarAgree.html('Comentar')
}

function commentCloseDisagree () {
  const v = require('./comments_events_vars')
  createHide(v.createDisagree, v.commentsDisagree, v.textDisagree, v.comentarDisagree)
  v.comentarDisagree.attr('id', 'comentar-disagree')
  v.comentarDisagree.html('Comentar')
}

// ----- Open Comments on Mobile

let disagreeOpened
let agreeOpened
// ---- $commentsMobile is an array of dom elements.
// commentsMobile[0] && [3] is HEADER
// commentsMobile[1] && [4] is CONTAINER
// commentsMobile[2] && [5] is COMMENT BUTTON
function commentsMobile (ev) {
  var v = require('./comments_events_vars')
  if ($(ev.target).attr('class').indexOf('disagree') !== -1) {
    if (disagreeOpened === false || disagreeOpened === undefined) {
      $(v.commentsMobile[3]).css('display', 'flex')
      $(v.commentsMobile[4]).css('display', 'block')
      $(v.commentsMobile[5]).css('display', 'flex')
      disagreeOpened = true
    } else {
      $(v.commentsMobile[3]).css('display', 'none')
      $(v.commentsMobile[4]).css('display', 'none')
      $(v.commentsMobile[5]).css('display', 'none')
      disagreeOpened = false
    }
  } else {
    if (agreeOpened === false || agreeOpened === undefined) {
      $(v.commentsMobile[0]).css('display', 'flex')
      $(v.commentsMobile[1]).css('display', 'block')
      $(v.commentsMobile[2]).css('display', 'flex')
      agreeOpened = true
    } else {
      $(v.commentsMobile[0]).css('display', 'none')
      $(v.commentsMobile[1]).css('display', 'none')
      $(v.commentsMobile[2]).css('display', 'none')
      agreeOpened = false
    }
  }
}

// AJAX calls to vote in the background without refreshing with a form!
function ajaxVote () {
  // Thumbup and thumbup-liked buttons
  const thumbupLiked   = yo`<span id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked"></span>`
  const thumbup        = yo`<span id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon"></span>`
  // Thumbdown and thumbdown-liked buttons
  const thumbdownLiked = yo`<span id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked"></span>`
  const thumbdown      = yo`<span id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon"></span>`
  // Loader
  const loader         = yo`<span id="like-post-loader"></span>`

  let id = $(this).attr('id')
  let uri, $hide, $show, $container, operation
  // Depending on clicked button, creates logics
  if (id === 'thumbup'){
    uri = 'upvote'
    $hide = $('#thumbup')
    $show = thumbupLiked
    $container = $('#agree-votes-container')
    operation = 1
  }

  else if (id === 'thumbup-liked'){
    uri = 'unupvote'
    $hide = $('#thumbup-liked')
    $show = thumbup
    $container = $('#agree-votes-container')
    operation = -1
  }

  else if (id === 'thumbdown'){
    uri = 'downvote'
    $hide = $('#thumbdown')
    $show = thumbdownLiked
    $container = $('#disagree-votes-container')
    operation = 1
  }

  else if (id === 'thumbdown-liked'){
    uri = 'undownvote'
    $hide = $('#thumbdown-liked')
    $show = thumbdown
    $container = $('#disagree-votes-container')
    operation = -1
  }

  // Includes loader and gets counter number
  $hide.remove()
  $container.append(loader)
  let $counter = $container.find('.post-counter')

  // AJAX call: Removes loader, appends new icon and sums or substracts 1 to counter
  // data sends the number of likes before updating
  $.post(`/apdjasfi/${uri}`, (data) => {
    $(loader).remove()
    $container.append($show)
    $counter.html(Number(data) + Number(operation))
  })
  //handles error. Logs error and reset previus icon
  .fail((response) => {
    console.log(response.responseText)
    $(loader).remove()
    $container.append($hide)
  })
}
