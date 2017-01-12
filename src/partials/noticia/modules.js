var yo = require('yo-yo')
var details = require('../details')
var votesBar = require('../votes_bar')

module.exports = {
  cuerpo: noticiaCuerpo,
  informate: noticiaInformate,
  comentarios: noticiaComentarios,
  card: comCard
}

function noticiaCuerpo (n) {
  return yo`<section class="Noticia_cuerpo">
    <h2 class="Noticia_cuerpo-breadcrumb">España</h2>
    <h1 class="Noticia_cuerpo-title">${n.title}</h1>
    ${details(n.date, n.tags)}
    <h4 class="Noticia_cuerpo-entradilla">${n.subtitle}</h4>
    ${votesBar(n.agreeVotes, n.disagreeVotes)}
  </section>`
}

function noticiaInformate () {
  return yo`<section class="Noticia_informate">
    <h2 class="Noticia_informate-encabezado">Infórmate</h2>
    <div class="Noticia_informate-media">
      <a class="Noticia_informate-media-item" href="#">
        <div><img src="/img/media/el-pais.svg" alt="" /></div>
      </a>
    </div>
  </section>`
}

function noticiaComentarios (n) {
  return yo`<section class="Noticia_comentarios">
    <h2 class="Noticia_comentarios-encabezado">Participa</h2>
    <div class="Noticia_comentarios-comentarios">
      ${noticiaComentariosAgree(n)}
      ${noticiaComentariosDisagree(n)}
    </div>
  </section>`
}

// *********** Templates for agree and disagree

function noticiaComentariosAgree (n) {
  return yo`<div class="Noticia_comentarios-comentarios-agree">
      <div class="Noticia_comentarios-comentarios-agree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-agree-header-title">A Favor</h2>
        <img src="/img/arrow-green.svg" alt="" id="arrow-agree" class="Noticia_comentarios-comentarios-agree-header-arrow" />
        <div class="Noticia_comentarios-comentarios-agree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-agree-header-votes-counter">${n.agreeVotes}</h2>
          <img src="/img/thumbs-up-green.svg" alt="" id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon" />
          <img src="/img/thumbs-up-green-filled.svg" alt="" id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked" />
        </div>
      </div>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-agree">
        ${comList()}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">
        <button id="agree-button" class="Noticia_comentarios-comentarios-buttons-agree">A favor</button>
        <button id="comentar-agree" class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
      </div>
    </div>`
}

function noticiaComentariosDisagree (n) {
  return yo`<div class="Noticia_comentarios-comentarios-disagree">
      <div class="Noticia_comentarios-comentarios-disagree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-disagree-header-title">En Contra</h2>
        <img src="/img/arrow-red.svg" alt="" id="arrow-disagree" class="Noticia_comentarios-comentarios-disagree-header-arrow" />
        <div class="Noticia_comentarios-comentarios-disagree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-disagree-header-votes-counter">${n.disagreeVotes}</h2>
          <img src="/img/thumbs-down-red.svg" alt="" id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon" />
          <img src="/img/thumbs-down-filled.svg" alt="" id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked" />
        </div>
      </div>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-disagree">
        ${comList()}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">
        <button id="disagree-button" class="Noticia_comentarios-comentarios-buttons-disagree">En contra</button>
        <button id="comentar-disagree" class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
      </div>
    </div>`
}

// ************* Template for list of comments

function comList () {
  return yo`<div>
  <div class="Noticia_comentarios_list-order Noticia_hide_on_mobile">
    <div class="Noticia_comentarios_list-order-votes">
      <p>Más votado</p>
    </div>
    <div class="Noticia_comentarios_list-order-new">
      <p>Más nuevos</p>
    </div>
  </div>
  <div class="Noticia_comentarios_list-comments Noticia_hide_on_mobile">
    ${comCard()}
    <div class="Noticia_comentarios_list-comments-create">
      <textarea name="create" id="textarea" cols="30" rows="10"></textarea>
      <div class="Noticia_comentarios_list-comments-create-buttons">
        <button id="enviar-comments" class="Noticia_comentarios_list-comments-create-buttons-enviar">Enviar</button>
        <button id="cancelar-comments" class="Noticia_comentarios_list-comments-create-buttons-cancelar">Cancelar</button>
      </div>
    </div>
  </div>
  </div>`
}

// ************* Template for the comment card.

function comCard (comment, date) {
  return yo`<div class="Noticias_comentarios_card">
    <div class="Noticias_comentarios_card-user">
      <div class="Noticias_comentarios_card-user-info">
        <img src="/img/avatar.jpg" alt="" class="Noticias_comentarios_card-user-info-avatar" />
        <p class="Noticias_comentarios_card-user-info-username">pegido</p>
      </div>
      <p class="Noticias_comentarios_card-user-date">${date}</p>
    </div>
    <p class="Noticias_comentarios_card-comment">${comment}</p>
    <div class="Noticias_comentarios_card-feedback">
      <p class="Noticias_comentarios_card-feedback-reply">Responder</p>
      <div class="Noticias_comentarios_card-feedback-like">
        <img src="/img/thumbs-up-black.svg" alt="" id="new-card" class="Noticias_comentarios_card-feedback-like-icon">
        <img src="/img/thumbs-up-black-filled.svg" alt="" id="new-card-liked" class="Noticias_comentarios_card-feedback-like-icon-liked">
        <p id="comments-like-counter" class="Noticias_comentarios_card-feedback-like-counter">10</p>
        <span class="Noticias_comentarios_card-feedback-like-megusta">me gusta</span>
      </div>
    </div>
  </div>`
}
