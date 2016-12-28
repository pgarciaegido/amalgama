var yo = require('yo-yo')
var votesBar = require('../votes_bar/index')
var details = require('../details/index')
var feed = require('../feed/index')
var registrate = require('../registrate_cta/index')

module.exports = yo`<div id="main">
	<section id="Latest" class="Latest">
		<h1 class="Latest-title">Renzi dimitirá mañana tras la aprovación de los presupuestos</h1>
			${details()}
		<h4 class="Latest-entradilla">Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi</h4>
			${votesBar()}
		<button class="Latest-button"><a href="./noticia.html">Ver más</a></button>
	</section>
	${registrate()}
	${feed}
</div>`