var yo = require('yo-yo')
var details = require('../details')
var votesBar = require('../votes_bar')
var formatDate = require('../utils/date')

module.exports = {
  noticiaCuerpo,
  noticiaInformate,
  noticiaComentarios,
  comCard,
  sortComments
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

// For loops dont work here, so bit of a workaround looping trough the
// object keys. Working well.
function noticiaInformate (n) {
  return yo`<section class="Noticia_informate">
    <h2 class="Noticia_informate-encabezado">Infórmate</h2>
    <div class="Noticia_informate-media">
    ${Object.keys(n.media).map((key) => {
      return mediaCard(n.media, key)
    })}
    </div>
  </section>`
}
// Careful with media image name.
function mediaCard (media, key) {
  return yo`<a target="_blank" class="Noticia_informate-media-item" href="${media[key]}">
    <div><img src="/img/media/${key}.svg" alt="${key}" /></div>
  </a>`
}

function noticiaComentarios (n, u, cA, cD) {
  return yo`<section class="Noticia_comentarios">
    <h2 class="Noticia_comentarios-encabezado">Participa</h2>
    <div class="Noticia_comentarios-comentarios">
      ${noticiaComentariosAgree(n, u, cA)}
      ${noticiaComentariosDisagree(n, u, cD)}
    </div>
  </section>`
}

// *********** Templates for agree and disagree

// We loop throu all the liked news by user. If so, display one icon or other
function votingPicsAgree (n, u) {
  const votedAgree = yo`<span id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked"></span>`

  const unVotedAgree = yo`<span id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon"></span>`

  // Loop around users liked posts
  for (let i in u.agreeVotes) {
    // If the post id is inside the user's array
    if (n._id === u.agreeVotes[i]) {
        return votedAgree
    }
  }

  return unVotedAgree
}

function votingPicsDisagree (n, u) {
  const votedDisagree = yo`<span id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked"></span>`

  const unVotedDisagree = yo`<span id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon"></span>`

  for (let i in u.disagreeVotes) {
    // If the post id is inside the user's array
    if (n._id === u.disagreeVotes[i]) {
        return votedDisagree
    }
  }

  return unVotedDisagree
}

function noticiaComentariosAgree (n, u, cA) {
  return yo`<div class="Noticia_comentarios-comentarios-agree">
      <div class="Noticia_comentarios-comentarios-agree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-agree-header-title">A Favor</h2>
        <span id="arrow-agree" class="Noticia_comentarios-comentarios-agree-header-arrow"></span>
        <div id="agree-votes-container" class="Noticia_comentarios-comentarios-agree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-agree-header-votes-counter post-counter">${n.agreeVotes}</h2>
          ${votingPicsAgree(n, u)}
        </div>
      </div>
      <h5 class="noticia-comments-feedback"></h5>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-agree">
        ${comList(u, cA, 'agree')}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">

        <button id="comentar-agree" class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
      </div>
    </div>`
}

function noticiaComentariosDisagree (n, u, cD) {
  return yo`<div class="Noticia_comentarios-comentarios-disagree">
      <div class="Noticia_comentarios-comentarios-disagree-header">
        <h2 id="title-disagree" class="Noticia_comentarios-comentarios-disagree-header-title">En Contra</h2>
        <span id="arrow-disagree" class="Noticia_comentarios-comentarios-disagree-header-arrow"></span>
        <div id="disagree-votes-container" class="Noticia_comentarios-comentarios-disagree-header-votes">
          <h2 class="Noticia_comentarios-comentarios-disagree-header-votes-counter post-counter">${n.disagreeVotes}</h2>
          ${votingPicsDisagree(n, u)}
        </div>
      </div>
      <h5 class="noticia-comments-feedback"></h5>
      <div class="Noticia_comentarios_list" id="Noticia_comentarios-disagree">
        ${comList(u, cD, 'disagree')}
      </div>
      <div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">

        <button id="comentar-disagree" class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
      </div>
    </div>`
}

// ************* Template for list of comments
// d stands for agree or disagree
function comList (u, c, a) {
  return yo`<div>
  <div class="Noticia_comentarios_list-order Noticia_hide_on_mobile">
    <button id="noticia-sort-likes-${a}" data-side="${a}" data-sort="likes" class="Noticia_comentarios_list-order-votes">Más votado</button>
    <button id="noticia-sort-new-${a}" data-side="${a}" data-sort="date" class="Noticia_comentarios_list-order-new sort-comments-active">Más nuevos</button>
  </div>
  <div id="noticia-comments-container-${a}" class="Noticia_comentarios_list-comments Noticia_hide_on_mobile">
    ${c.map((c) => {
      return comCard(u, c)
    })}
    ${renderSendComment(a)}
  </div>
  </div>`
}

function sortComments (u, c) {
  return yo`
  ${c.map((c) => {
    return comCard(u, c)
  })}
  `
}

// Renders form for sending comments
function renderSendComment (a) {
  let post = a === 'agree' ? 'commentagree' : 'commentdisagree'

  return yo`<form method="POST" action="/api/${post}" class="Noticia_comentarios_list-comments-create">
    <span id="close-${post}" class="Noticia_comentarios_list-comments-create-cancel"></span>
    <textarea name="create" id="textarea" cols="30" rows="10"></textarea>
    <div class="Noticia_comentarios_list-comments-create-buttons">
      <input type="submit" id="enviar-comments" class="Noticia_comentarios_list-comments-create-buttons-enviar" value="Enviar" />
    </div>
  </form>`
}

// ************* Template for the comment card.

function comCard (user, comment) {
  return yo`<div class="Noticias_comentarios_card">
    <p class="Noticias_comentarios_card-counter">#<span>${comment.number}</span></p>
    <div class="Noticias_comentarios_card-user">
      <div class="Noticias_comentarios_card-user-info">
        <p class="Noticias_comentarios_card-user-info-username">${comment.username}</p>
      </div>
      <p class="Noticias_comentarios_card-user-date">${formatDate(comment.date)}</p>
    </div>
    <p class="Noticias_comentarios_card-comment">${comment.comment}</p>
    <div class="Noticias_comentarios_card-feedback">
      <div class="Noticias_comentarios_card-feedback-like">
        ${comCardPics(user, comment)}
        <p id="comments-like-counter" class="Noticias_comentarios_card-feedback-like-counter">${comment.likes}</p>
        <span class="Noticias_comentarios_card-feedback-like-megusta">me gusta</span>
      </div>
    </div>
    <div id="comments-like-error" class="Noticias_comentarios_card-error"></div>
  </div>`
}

// Renders comment like button
function comCardPics (user, comment) {
  if (comment.likedBy.length > 0){
    // if the logged user's id is on the array of liked comments, render liked button
    for (let i in comment.likedBy){
      if (comment.likedBy[i] === user._id){
        return yo`<span id="new-card-liked" data-comment="${comment._id}" class="Noticias_comentarios_card-feedback-like-icon-liked"></span>`
      }
    }
  }
  // otherwise return non liked button
  return yo`<span id="new-card" data-comment="${comment._id}" class="Noticias_comentarios_card-feedback-like-icon"></span>`
}
