var yo = require('yo-yo')
var $ = require('jquery')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')
var comList = require('../noticia/noticia_comlist/index')
var registrate = require('../registrate_cta/index')

module.exports = function (n) {
  return yo`<div id="noticia_main">
<section class="Noticia_cuerpo">
  <h2 class="Noticia_cuerpo-breadcrumb">España</h2>
  <h1 class="Noticia_cuerpo-title">${n.title}</h1>
  ${details(n.date, n.tags)}
  <h4 class="Noticia_cuerpo-entradilla">${n.subtitle}</h4>
  ${votesBar(n.agreeVotes, n.disagreeVotes)}
</section>
<section class="Noticia_informate">
  <h2 class="Noticia_informate-encabezado">
    Infórmate
  </h2>
  <div class="Noticia_informate-media">
    <a class="Noticia_informate-media-item" href="#">
      <div><img src="/img/media/el-pais.svg" alt="" /></div>
    </a>
    <a class="Noticia_informate-media-item" href="#">
      <div><img src="/img/media/el-mundo.svg" alt="" /></div>
    </a>
    <a class="Noticia_informate-media-item" href="#">
      <div><img src="/img/media/the-guardian.svg" alt="" /></div>
    </a>
    <a class="Noticia_informate-media-item" href="#">
      <div><img src="/img/media/the-new-york-times.svg" alt="" /></div>
    </a>
  </div>
</section>
${registrate()}
<section class="Noticia_comentarios">
  <h2 class="Noticia_comentarios-encabezado">Participa</h2>
  <div class="Noticia_comentarios-comentarios">
    <div class="Noticia_comentarios-comentarios-agree">
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
    </div>
    <div class="Noticia_comentarios-comentarios-disagree">
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
    </div>
  </div>
</section>
${votesBar(n.agreeVotes, n.disagreeVotes)}
</div>`
}