import yo         from 'yo-yo'
import votesBar   from '../votes_bar/index'
import details    from '../details/index'
import feed       from '../feed/index'
import registrate from '../registrate_cta'

module.exports = function (n, latest) {
  return yo`<div id="main">
  <section id="Latest" class="Latest">
    <h1 class="Latest-title">${n[latest].title}</h1>
      ${details(n[latest].date, n[latest].tags)}
    <h4 class="Latest-entradilla">${n[latest].subtitle}</h4>
      ${votesBar(n[latest].agreeVotes, n[latest].disagreeVotes)}
      ${latestButton(n, latest)}
  </section>
  ${registrate()}
  <div class="Feed">
  ${n.pop()}
  ${n.reverse().map(function (nw) {
    return feed(nw)
  })}
  </div>
</div>`
}

function latestButton (n, latest) {
  if (document.URL.indexOf('invitado') != -1) {
    return yo`<a href="/accede" class="Latest-button">Ver más</a>`
  } else {
    return yo`<a href="./app/noticia/${n[latest]._id}" class="Latest-button">Ver más</a>`
  }
}
