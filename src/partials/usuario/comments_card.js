import yo from 'yo-yo'

module.exports = function () {
  return yo`<div class="Usuario_main_comments-card">
  <h2 class="Usuario_main_comments-card-title">Mateo Renzi dice una cosa y luego la otra y tal y cual</h2>
  <p class="Usuario_main_comments-card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo delectus molestias, omnis, deleniti rem vero quibusdam ea ut aliquid, nulla possimus ipsum quas facilis minus sunt obcaecati necessitatibus pariatur.</p>
  <div class="Usuario_main_comments-card-details">
    <p class="Usuario_main_comments-card-details-date">04 diciembre de 2016</p>
    <div class="Usuario_main_comments-card-details-like">
      <img src="/img/thumbs-up-black.svg" alt="" class="Usuario_main_comments-card-details-like-icon">
      <p id="comments-like-counter" class="Usuario_main_comments-card-details-like-counter">10</p>
      <span class="Usuario_main_comments-card-details-like-megusta">me gusta</span>
    </div>
  </div>
</div>`
}
