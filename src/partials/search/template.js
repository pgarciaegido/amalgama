import yo from 'yo-yo'
import format from '../utils/date'

module.exports = {
  template
}

function template (posts, query) {
  return yo`<div id="main" class="Search">
    <h1 class="Search-title">Buscar</h1>
    <h2 class="Search-subtitle">Resultados de: ${query}</h2>
    ${posts.map((post) => {
      return card(post)
    })}
  </div>
`
}

function card (post) {
  return yo`<a class="Search-card" href="/app/noticia/${post._id}"><div class="Search-card-container">
    <h3 class="Search-card-title">${post.title}</h3>
    <div class="Search-card-details">
      <div class="Search-card-details-left">
        <span class="Search-card-details-left-date">${format(post.date)}</span>
        <span class="Search-card-details-left-votes">Votos: ${post.agreeVotes + post.disagreeVotes}</span>
      </div>
      <div class="Search-card-details-right">
        <img src="/img/thumbs-up-green.svg" alt="" class="Search-card-details-right-up-img" />
        <span class="Search-card-details-right-up-votes">${post.agreeVotes}</span>
        <span>·</span>
        <span class="Search-card-details-right-down-votes">${post.disagreeVotes}</span>
        <img src="/img/thumbs-down-red.svg" alt="" class="Search-card-details-right-down-img" />
      </div>
    </div>
  </div></a>`
}
