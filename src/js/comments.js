var $ = require('jquery')
var card = require('./comments_template')
var votesLiked = require('./votesLiked')
var moment = require('moment')

// //////////////////////////// Variables

var $comentarAgree = $('.Noticia_comentarios-comentarios-agree').find('.Noticia_comentarios-comentarios-buttons-comment')
var $comentarDisagree = $('.Noticia_comentarios-comentarios-disagree').find('.Noticia_comentarios-comentarios-buttons-comment')

var $cancelarAgree = $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments-create-buttons-cancelar')
var $cancelarDisagree = $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments-create-buttons-cancelar')

var $createAgree = $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments-create')
var $createDisagree = $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments-create')

var $commentsAgree = $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments')
var $commentsDisagree = $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments')

var $enviarAgree = $commentsAgree.find('.Noticia_comentarios_list-comments-create-buttons-enviar')
var $enviarDisagree = $commentsDisagree.find('.Noticia_comentarios_list-comments-create-buttons-enviar')

var $textAgree = $commentsAgree.find('#textarea')
var $textDisagree = $commentsDisagree.find('#textarea')

var $commentLikeIcon = $('.Noticias_comentarios_card-feedback-like-icon')
var $commentLikeIconLiked = $('.Noticias_comentarios_card-feedback-like-icon-liked')

var $commentLikeCounter = $('#comments-like-counter')

var $arrowAgree = $('.Noticia_comentarios-comentarios-agree-header-arrow')
var $arrowDisagree = $('.Noticia_comentarios-comentarios-disagree-header-arrow')

var $titleAgree = $('.Noticia_comentarios-comentarios-agree-header-title')
var $titleDisagree = $('.Noticia_comentarios-comentarios-disagree-header-title')

var $commentsMobile = $($('.Noticia_hide_on_mobile'))

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
  if ($(ev.target).attr('class').indexOf('disagree') !== -1) {
    if (disagreeOpened === false || disagreeOpened === undefined) {
      $($commentsMobile[3]).css('display', 'flex')
      $($commentsMobile[4]).css('display', 'block')
      $($commentsMobile[5]).css('display', 'flex')
      disagreeOpened = true
    } else {
      $($commentsMobile[3]).css('display', 'none')
      $($commentsMobile[4]).css('display', 'none')
      $($commentsMobile[5]).css('display', 'none')
      disagreeOpened = false
    }
  } else {
    if (agreeOpened === false || agreeOpened === undefined) {
      $($commentsMobile[0]).css('display', 'flex')
      $($commentsMobile[1]).css('display', 'block')
      $($commentsMobile[2]).css('display', 'flex')
      agreeOpened = true
    } else {
      $($commentsMobile[0]).css('display', 'none')
      $($commentsMobile[1]).css('display', 'none')
      $($commentsMobile[2]).css('display', 'none')
      agreeOpened = false
    }
  }
}

// ////////////////////////// Event Handlers

// ------ Creates input
$comentarAgree.on('click', function () {
  createShow($createAgree, $commentsAgree)
})

$comentarDisagree.on('click', function () {
  createShow($createDisagree, $commentsDisagree)
})

// ----- Inside input, cancel and close

$cancelarAgree.on('click', function () {
  createHide($createAgree, $commentsAgree, $textAgree)
})

$cancelarDisagree.on('click', function () {
  createHide($createDisagree, $commentsDisagree, $textDisagree)
})

// ------ Inside input, sends and close

$enviarAgree.on('click', function () {
  addComment($textAgree, $commentsAgree)
  createHide($createAgree, $commentsAgree, $textAgree)
})

$enviarDisagree.on('click', function () {
  addComment($textDisagree, $commentsDisagree)
  createHide($createDisagree, $commentsDisagree, $textDisagree)
})

//  -----Likes a comment

$commentLikeIcon.on('click', function () {
  votesLiked($(this), true, $commentLikeCounter, null, $commentLikeIconLiked)
})

// ----- Dislikes a comment already liked

$commentLikeIconLiked.on('click', function () {
  votesLiked($(this), false, $commentLikeCounter, null, $commentLikeIcon)
})

// Appended cards are whatched so the event pops

$(document).on('click', '#new-card', function () {
  votesLiked($(this), true, $commentLikeCounter, null, $commentLikeIconLiked)
})

$(document).on('click', '#new-card-liked', function () {
  votesLiked($(this), false, $commentLikeCounter, null, $commentLikeIconLiked)
})

// ----- Open and close menu when mobile

$arrowAgree.add($titleAgree).on('click', commentsMobile)

$arrowDisagree.add($titleDisagree).on('click', commentsMobile)
