import yo from 'yo-yo'

module.exports = function (com) {
  return yo`<div class="Usuario_main_comments-card">
  <h2 class="Usuario_main_comments-card-title">Mateo Renzi dice una cosa y luego la otra y tal y cual</h2>
  <p class="Usuario_main_comments-card-text">${com.comment}</p>
  <div class="Usuario_main_comments-card-details">
    <p class="Usuario_main_comments-card-details-date">${com.date}</p>
    <div class="Usuario_main_comments-card-details-like">
      <img src="/img/thumbs-up-black.svg" alt="" class="Usuario_main_comments-card-details-like-icon">
      <p id="comments-like-counter" class="Usuario_main_comments-card-details-like-counter">${com.likedBy.length}</p>
      <span class="Usuario_main_comments-card-details-like-megusta">me gusta</span>
    </div>
  </div>
</div>`
}
