var $ = require('jquery')
var card = require('./noticia_comcard/index')
var votesLiked = require('./votesLiked')
var moment = require('moment')

// //////////////////////////// Functions

// ---- Displays textarea
function createShow (create, comment) {
  create.css('display', 'block')
  comment.scrollTop(0).css('overflow-y', 'hidden')
}

// ---- Hide textarea
function createHide (create, comment, textarea) {
  create.css('display', 'none')
  comment.css('overflow-y', 'scroll')
  textarea.val('')
}

// ---- Inserts the card template, including the comment and the date
function addComment (textarea, comment) {
  var userComment = textarea.val()
  var date = moment().format('D MMM YYYY')
  comment.append(card(userComment, date))
}

// ----- Open Comments on Mobile

var agreeOpened
var disagreeOpened

// ---- $commentsMobile is an array of dom elements.

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

// ////////////////////////// Event Handlers

// ------ Creates input
$(document).on('click', '#comentar-agree', function () {
  var v = require('./comments_events_vars')
  createShow(v.createAgree, v.commentsAgree)
})

$(document).on('click', '#comentar-disagree', function () {
  var v = require('./comments_events_vars')
  createShow(v.createDisagree, v.commentsDisagree)
})

// // ----- Inside input, cancel and close

$(document).on('click', '#cancelar-comments', function () {
  var v = require('./comments_events_vars')
  if(this.parentElement.parentElement.parentElement.parentElement.parentElement.id.indexOf('disagree') == -1){
    createHide(v.createAgree, v.commentsAgree, v.textAgree)
  } else {
    createHide(v.createDisagree, v.commentsDisagree, v.textDisagree)
  }
})

// // ------ Inside input, sends and close

$(document).on('click', '#enviar-comments', function () {
  var v = require('./comments_events_vars')
  if(this.parentElement.parentElement.parentElement.parentElement.parentElement.id.indexOf('disagree') == -1){
    addComment(v.textAgree, v.commentsAgree)
    createHide(v.createAgree, v.commentsAgree, v.textAgree)
  } else {
    addComment(v.textDisagree, v.commentsDisagree)
    createHide(v.createDisagree, v.commentsDisagree, v.textDisagree)
  }
})

// ----------- Like comments

$(document).on('click', '#new-card', function () {
  var v = require('./comments_events_vars')
  votesLiked($(this), true, v.commentLikeCounter, null, v.commentLikeIconLiked)
})

$(document).on('click', '#new-card-liked', function () {
  var v = require('./comments_events_vars')
  votesLiked($(this), false, v.commentLikeCounter, null, v.commentLikeIconLiked)
})

// // ----- Open and close menu when mobile

$(document).on('click', '#arrow-agree', commentsMobile)
$(document).on('click', '#title-agree', commentsMobile)

$(document).on('click', '#arrow-disagree', commentsMobile)
$(document).on('click', '#title-disagree', commentsMobile)