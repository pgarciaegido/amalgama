import $ from 'jquery'

module.exports = {
  'comentarAgree':        $('.Noticia_comentarios-comentarios-agree').find('.Noticia_comentarios-comentarios-buttons-comment'),
  'comentarDisagree':     $('.Noticia_comentarios-comentarios-disagree').find('.Noticia_comentarios-comentarios-buttons-comment'),
  'cancelarAgree':        $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments-create-cancel'),
  'cancelarDisagree':     $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments-create-cancel'),
  'createAgree':          $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments-create'),
  'createDisagree':       $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments-create'),
  'commentsAgree':        $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments'),
  'commentsDisagree':     $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments'),
  'enviarAgree':          $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments').find('.Noticia_comentarios_list-comments-create-buttons-enviar'),
  'enviarDisagree':       $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments').find('.Noticia_comentarios_list-comments-create-buttons-enviar'),
  'textAgree':            $('#Noticia_comentarios-agree').find('.Noticia_comentarios_list-comments').find('#textarea'),
  'textDisagree':         $('#Noticia_comentarios-disagree').find('.Noticia_comentarios_list-comments').find('#textarea'),
  'commentLikeIcon':      $('.Noticias_comentarios_card-feedback-like-icon'),
  'commentLikeIconLiked': $('.Noticias_comentarios_card-feedback-like-icon-liked'),
  'commentLikeCounter':   $('#comments-like-counter'),
  'arrowAgree':           $('.Noticia_comentarios-comentarios-agree-header-arrow'),
  'arrowDisagree':        $('.Noticia_comentarios-comentarios-disagree-header-arrow'),
  'titleAgree':           $('.Noticia_comentarios-comentarios-agree-header-title'),
  'titleDisagree':        $('.Noticia_comentarios-comentarios-disagree-header-title'),
  'commentsMobile':       $('.Noticia_hide_on_mobile')
}
