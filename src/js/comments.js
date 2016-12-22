var $ = require('jquery')
var yo = require('yo-yo')
var card = require('./comments_template') 

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
// Functions

function createShow(create, comment) {
  create.css('display', 'block')
  comment.scrollTop(0).css('overflow-y', 'hidden')
}

function createHide(create, comment, textarea) {
  create.css('display', 'none')
  comment.css('overflow-y', 'scroll')
  textarea.val('')
}

function addComment (textarea, comment) {
  var userComment = textarea.val()
  comment.append(card(userComment))
}

// Event Handlers

$comentarAgree.on('click', function(){
  createShow($createAgree, $commentsAgree)
})

$comentarDisagree.on('click', function(){
  createShow($createDisagree, $commentsDisagree)
})

$cancelarAgree.on('click', function(){
  createHide($createAgree, $commentsAgree, $textAgree)
})

$cancelarDisagree.on('click', function(){
  createHide($createDisagree, $commentsDisagree, $textDisagree)
})

$enviarAgree.on('click', function(){
  addComment($textAgree, $commentsAgree)
  createHide($createAgree, $commentsAgree, $textAgree)
})

$enviarDisagree.on('click', function(){
  addComment($textDisagree, $commentsDisagree)
  createHide($createDisagree, $commentsDisagree, $textDisagree)
})