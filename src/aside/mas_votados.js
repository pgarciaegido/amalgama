var yo = require('yo-yo')

module.exports = function (post) {

	return yo`<div class="Aside_temas-tema">
      <p class="Aside_temas-tema-title">${post.title}</p>
      <div class="Aside_temas-tema-info">
        <span class="Aside_temas-tema-info-votes">${post.total} votos</span>
        <span class="Aside_temas-tema-info-balance">${post.balance}</span>
      </div>
    </div>`
}
