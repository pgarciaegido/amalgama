import $           from 'jquery'
import { comCard } from './modules'
import votesLiked  from './votesLiked'
import moment      from 'moment'

module.exports = {
  createShow,
  createHide,
  addComment,
  commentAgree,
  commentDisagree,
  cancelarComments,
  enviarComments,
  likeComment,
  commentsMobile
}

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
  let userComment = textarea.val()
  let date = moment().format('D MMM YYYY')
  comment.append(card(userComment, date))
}

// Opens input in agree
function commentAgree () {
  const v = require('./comments_events_vars')
  if ($('#cancelar-comments').data().resolve === undefined) {
    createShow(v.createAgree, v.commentsAgree)
    $('#cancelar-comments').data('resolve', 'agree')
  }
}

// Opens input in disagree
function commentDisagree () {
  const v = require('./comments_events_vars')
  if ($('#cancelar-comments').data().resolve === undefined) {
    createShow(v.createDisagree, v.commentsDisagree)
    $('#cancelar-comments').data('resolve', 'disagree')
  }
}

function cancelarComments () {
  const v = require('./comments_events_vars')
  if ($('#cancelar-comments').data().resolve === 'agree') {
    func.createHide(v.createAgree, v.commentsAgree, v.textAgree)
  } else if ($('#cancelar-comments').data().resolve === 'disagree') {
    func.createHide(v.createDisagree, v.commentsDisagree, v.textDisagree)
  }
  $('#cancelar-comments').data().resolve = undefined
}

// --------- Send comments
function enviarComments () {
  const v = require('./comments_events_vars')
  if ($('#cancelar-comments').data().resolve === 'agree') {
    func.addComment(v.textAgree, v.commentsAgree)
    func.createHide(v.createAgree, v.commentsAgree, v.textAgree)
  } else if ($('#cancelar-comments').data().resolve === 'disagree') {
    func.addComment(v.textDisagree, v.commentsDisagree)
    func.createHide(v.createDisagree, v.commentsDisagree, v.textDisagree)
  }
  $('#cancelar-comments').data().resolve = undefined
}


// ------- Likes / unlikes comment
function likeComment () {
  const v = require('./comments_events_vars')
  if(this.id == 'new-card'){
    votesLiked($(this), true, v.commentLikeCounter, null, v.commentLikeIconLiked)
  } else {
    votesLiked($(this), false, v.commentLikeCounter, null, v.commentLikeIconLiked)
  }
}

// ----- Open Comments on Mobile
function commentsMobile (ev) {
  let agreeOpened
  let disagreeOpened
  commentsMobileInside(ev)
}

// ---- $commentsMobile is an array of dom elements.
function commentsMobileInside (ev) {
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
