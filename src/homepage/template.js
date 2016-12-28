var yo = require('yo-yo')

module.exports = yo`<div id="main">
	<section id="Latest" class="Latest">
		<h1 class="Latest-title">Renzi dimitirá mañana tras la aprovación de los presupuestos</h1>
		<div class="Details">
			<div class="Details-date">
				<img class="Details-date-icon" src="img/clock.svg" />
				<span class="Details-date-text">7 diciembre 2016</span>
			</div>
			<div class="Details-tags">
				<img class="Details-tags-icon" src="img/price-tags.svg" />
				<span class="Details-tags-text">Internacional</span>
			</div>
		</div>
		<h4 class="Latest-entradilla">Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi</h4>
		<div class="Votes_bar">
			<div class="Votes_bar-colors">
				<div class="Votes_bar-colors-red"></div>
				<div class="Votes_bar-colors-green"></div>
			</div>
			<div class="Votes_bar-numbers">
				<span class="Votes_bar-numbers-green">220</span>
				<span class="Votes_bar-numbers-red">220</span>
			</div>
		</div>
		<button class="Latest-button"><a href="./noticia.html">Ver más</a></button>
	</section>
	<div class="Register_cta">
		<button class="Register_cta-accede">Accede</button>
		<h2 class="Register_cta-participa">¡Participa!</h2>
		<button class="Register_cta-registrate">Regístrate</button>
	</div>
	<div class="Feed">
		<article class="Feed-article impar">
			<h2 class="Feed-article-title">Es necesaria la subida de impuestos del PP?</h2>
			<div class="Details">
				<div class="Details-date">
					<img class="Details-date-icon" src="img/clock.svg" />
					<span class="Details-date-text">7 diciembre 2016</span>
				</div>
				<div class="Details-tags">
					<img class="Details-tags-icon" src="img/price-tags.svg" />
					<span class="Details-tags-text">Internacional</span>
				</div>
			</div>
			<div class="Feed-article-bars">
				<div class="Votes_bar">
					<div class="Votes_bar-colors">
						<div class="Votes_bar-colors-red"></div>
						<div class="Votes_bar-colors-green"></div>
					</div>
					<div class="Votes_bar-numbers">
						<span class="Votes_bar-numbers-green">220</span>
						<span class="Votes_bar-numbers-red">220</span>
					</div>
				</div>
			</div>
			<button class="Feed-article-button">Ver más</button>
		</article>
		<article class="Feed-article par">
			<h2 class="Feed-article-title">Es necesaria la subida de impuestos del PP?</h2>
			<div class="Details">
				<div class="Details-date">
					<img class="Details-date-icon" src="img/clock.svg" />
					<span class="Details-date-text">7 diciembre 2016</span>
				</div>
				<div class="Details-tags">
					<img class="Details-tags-icon" src="img/price-tags.svg" />
					<span class="Details-tags-text">Internacional</span>
				</div>
			</div>
			<div class="Feed-article-bars">
				<div class="Votes_bar">
					<div class="Votes_bar-colors">
						<div class="Votes_bar-colors-red"></div>
						<div class="Votes_bar-colors-green"></div>
					</div>
					<div class="Votes_bar-numbers">
						<span class="Votes_bar-numbers-green">220</span>
						<span class="Votes_bar-numbers-red">220</span>
					</div>
				</div>
			</div>
			<button class="Feed-article-button">Ver más</button>
		</article>
	</div>
</div>`