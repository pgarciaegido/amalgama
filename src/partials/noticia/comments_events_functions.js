import $           from 'jquery'
import { comCard } from './modules'
import moment      from 'moment'
import yo          from 'yo-yo'

module.exports = {
  createShow,
  createHide,
  commentAgree,
  commentDisagree,
  commentCloseAgree,
  commentCloseDisagree,
  commentsMobile
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
