var yo = require('yo-yo')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')
var comList = require('../noticia/noticia_comlist/index')
var registrate = require('../registrate_cta/index')


module.exports = function () {
	return yo`<div id="noticia_main">
<section class="Noticia_cuerpo">
	<h2 class="Noticia_cuerpo-breadcrumb">España</h2>
	<h1 class="Noticia_cuerpo-title">Renzi dimitirá esta tarde tras la aprobación de los presupuestos</h1>
	${details()}
	<h4 class="Noticia_cuerpo-entradilla">Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi</h4>
	${votesBar()}
</section>
<section class="Noticia_informate">
	<h2 class="Noticia_informate-encabezado">
		Infórmate
	</h2>
	<div class="Noticia_informate-media">
		<a class="Noticia_informate-media-item" href="#">
			<div><img src="img/media/el-pais.svg" alt="" /></div>
		</a>
		<a class="Noticia_informate-media-item" href="#">
			<div><img src="img/media/el-mundo.svg" alt="" /></div>
		</a>
		<a class="Noticia_informate-media-item" href="#">
			<div><img src="img/media/the-guardian.svg" alt="" /></div>
		</a>
		<a class="Noticia_informate-media-item" href="#">
			<div><img src="img/media/the-new-york-times.svg" alt="" /></div>
		</a>
	</div>
</section>
${registrate()}
<section class="Noticia_comentarios">
	<h2 class="Noticia_comentarios-encabezado">Participa</h2>
	<div class="Noticia_comentarios-comentarios">
		<div class="Noticia_comentarios-comentarios-agree">
			<div class="Noticia_comentarios-comentarios-agree-header">
				<h2 class="Noticia_comentarios-comentarios-agree-header-title">A Favor</h2>
				<img src="img/arrow-green.svg" alt="" class="Noticia_comentarios-comentarios-agree-header-arrow" />
				<div class="Noticia_comentarios-comentarios-agree-header-votes">
					<h2 class="Noticia_comentarios-comentarios-agree-header-votes-counter">2</h2>
					<img src="img/thumbs-up-green.svg" alt="" id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon" />
					<img src="img/thumbs-up-green-filled.svg" alt="" id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked" />
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
				<h2 class="Noticia_comentarios-comentarios-disagree-header-title">En Contra</h2>
				<img src="img/arrow-red.svg" alt="" class="Noticia_comentarios-comentarios-disagree-header-arrow" />
				<div class="Noticia_comentarios-comentarios-disagree-header-votes">
					<h2 class="Noticia_comentarios-comentarios-disagree-header-votes-counter">23</h2>
					<img src="img/thumbs-down-red.svg" alt="" id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon" />
					<img src="img/thumbs-down-filled.svg" alt="" id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked" />
				</div>
			</div>
			<div class="Noticia_comentarios_list" id="Noticia_comentarios-disagree">
				${comList()}
			</div>
			<div class="Noticia_comentarios-comentarios-buttons Noticia_hide_on_mobile">
				<button id="disagree-button" class="Noticia_comentarios-comentarios-buttons-disagree">En contra</button>
				<button class="Noticia_comentarios-comentarios-buttons-comment">Comentar</button>
			</div>
		</div>
	</div>
</section>
</div>`
}
