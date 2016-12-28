var yo = require('yo-yo')

module.exports = function (comment, date) {
  return yo`<div class="Noticias_comentarios_card">
  <div class="Noticias_comentarios_card-user">
    <div class="Noticias_comentarios_card-user-info">
      <img src="img/avatar.jpg" alt="" class="Noticias_comentarios_card-user-info-avatar" />
      <p class="Noticias_comentarios_card-user-info-username">pegido</p>
    </div>
    <p class="Noticias_comentarios_card-user-date">${date}</p>
  </div>
  <p class="Noticias_comentarios_card-comment">${comment}</p>
  <div class="Noticias_comentarios_card-feedback">
    <p class="Noticias_comentarios_card-feedback-reply">Responder</p>
    <div class="Noticias_comentarios_card-feedback-like">
      <img src="img/thumbs-up-black.svg" alt="" id="new-card" class="Noticias_comentarios_card-feedback-like-icon">
      <img src="img/thumbs-up-black-filled.svg" alt="" id="new-card-liked" class="Noticias_comentarios_card-feedback-like-icon-liked">
      <p id="comments-like-counter" class="Noticias_comentarios_card-feedback-like-counter">10</p>
      <span class="Noticias_comentarios_card-feedback-like-megusta">me gusta</span>
    </div>
  </div>
</div>`
}