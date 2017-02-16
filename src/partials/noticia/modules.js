var yo = require('yo-yo')
var details = require('../details')
var votesBar = require('../votes_bar')

module.exports = {
  noticiaCuerpo,
  noticiaInformate,
  noticiaComentarios,
  comCard
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

function noticiaComentarios (n, u) {
  return yo`<section class="Noticia_comentarios">
    <h2 class="Noticia_comentarios-encabezado">Participa</h2>
    <div class="Noticia_comentarios-comentarios">
      ${noticiaComentariosAgree(n, u)}
      ${noticiaComentariosDisagree(n, u)}
    </div>
  </section>`
}

// *********** Templates for agree and disagree

// We loop throu all the liked news by user. If so, display one icon or other
// The third argument tells if returns agree or disagree
function votingFormsAgree (n, u) {
  const votedAgree = yo`<form method="POST" action="/api/unupvote">
    <input type="image" src="/img/thumbs-up-green-filled.svg" alt="submit unvote" id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked" />
  </form>`

  const unVotedAgree = yo`<form method="POST" action="/api/upvote">
    <input type="image" src="/img/thumbs-up-green.svg" alt="submit upvote" id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon" />
  </form>`

  // Loop around users liked posts
  for (let i in u.agreeVotes) {
    // If the post id is inside the user's array
    if (n._id === u.agreeVotes[i]) {
        return votedAgree
    }
  }

  return unVotedAgree
}

function votingFormsDisagree (n, u) {
  const votedDisagree = yo`<form method="POST" action="/api/undownvote">
    <input type="image" src="/img/thumbs-down-filled.svg" alt="" id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked" />
  </form>`

  const unVotedDisagree = yo`<form method="POST" action="/api/downvote">
    <input type="image" src="/img/thumbs-down-red.svg" alt="" id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon" />
  </form>`

  for (let i in u.disagreeVotes) {
    // If the post id is inside the user's array
    if (n._id === u.disagreeVotes[i]) {
        return votedDisagree
    }
  }

  return unVotedDisagree
}

function noticiaComentariosAgree (n, u) {
  return yo`<div class="Noticia_comentarios-comentarios-agree">
      <div class="Noticia_comentarios-comentarios-agree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-agree-header-title">A Favor</h2>
        <img src="/img/arrow-green.svg" alt="" id="arrow-agree" class="Noticia_comentarios-comentarios-agree-header-arrow" />
        <div class="Noticia_comentarios-comentarios-agree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-agree-header-votes-counter">${n.agreeVotes}</h2>
          ${votingFormsAgree(n, u)}
        </div>
      </div>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-agree">
        ${comList()}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">

        <button id="comentar-agree" class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
      </div>
    </div>`
}

function noticiaComentariosDisagree (n, u) {
  return yo`<div class="Noticia_comentarios-comentarios-disagree">
      <div class="Noticia_comentarios-comentarios-disagree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-disagree-header-title">En Contra</h2>
        <img src="/img/arrow-red.svg" alt="" id="arrow-disagree" class="Noticia_comentarios-comentarios-disagree-header-arrow" />
        <div class="Noticia_comentarios-comentarios-disagree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-disagree-header-votes-counter">${n.disagreeVotes}</h2>
          ${votingFormsDisagree(n, u)}
        </div>
      </div>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-disagree">
        ${comList()}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">

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
    <form method="POST" action="/api/comment" class="Noticia_comentarios_list-comments-create">
      <textarea name="create" id="textarea" cols="30" rows="10"></textarea>
      <div class="Noticia_comentarios_list-comments-create-buttons">
        <input type="submit" id="enviar-comments" class="Noticia_comentarios_list-comments-create-buttons-enviar" value="Enviar" />
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
