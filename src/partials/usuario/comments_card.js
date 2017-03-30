import yo from 'yo-yo'
import dateFormat from '../utils/date'

module.exports = function (com) {
  return yo`<div class="Usuario_main_comments-card">
  <h2 class="Usuario_main_comments-card-title">${com.postTitle}</h2>
  <p class="Usuario_main_comments-card-text">${com.comment}</p>
  <div class="Usuario_main_comments-card-details">
    <p class="Usuario_main_comments-card-details-date">${dateFormat(com.date)}</p>
    <div class="Usuario_main_comments-card-details-like">
      <span class="Usuario_main_comments-card-details-like-icon"></span>
      <p id="comments-like-counter" class="Usuario_main_comments-card-details-like-counter">${com.likedBy.length}</p>
      <span class="Usuario_main_comments-card-details-like-megusta">me gusta</span>
    </div>
  </div>
</div>`
}
