var $ = require('jquery')
var yo = require('yo-yo')

module.exports = function (ctx, next) {
	var container = $('#main-container')
	container.append(el)
}

var el = yo`<aside id="aside">
	<div class="Aside_registrate">
		<h2 class="Aside_registrate-title">Regístrate</h2>
		<p class="Aside_registrate-subtitle">
			Únete a la comunidad, vota y comparte tu opinión. ¡Queremos escucharte!
		</p>
		<form class="Aside_registrate-form" action="">
			<label for="">Nombre usuario: 
				<input type="text">
			</label>
			<label for="">Email: 
				<input type="email">
			</label>
			<label for="">Contraseña: 
				<input type="password">
			</label>
			<input class="Aside_registrate-form-button" type="submit" value="Regístrate">
		</form>
		<button class="Aside_registrate-facebook">Regístrate con Facebook</button>
		<button class="Aside_registrate-google">Regístrate con Google</button>
	</div>
	<div class="Aside_temas">
		<h2 class="Aside_temas-title">Temas más votados</h2>
		<div class="Aside_temas-tema">
			<p class="Aside_temas-tema-title">Renzi dimite en Italia a pesar del las ventajas de las encuestas</p>
			<div class="Aside_temas-tema-info">
				<span class="Aside_temas-tema-info-votes">1300 votos</span>
				<span class="Aside_temas-tema-info-balance">-42</span>
			</div>
		</div>	
	</div>
	<div class="Aside_subscribe">
		<h2 class="Aside_subscribe-title">¡Suscríbete</h2>
		<p class="Aside_subscribe-subtitle">Suscríbete y te enviaremos un email cuando haya una nueva entrada. No te enviaremos publicidad, ni daremos tus datos a nadie. Palabra.</p>
		<form action="" class="Aside_subscribe-form">
			<label for="" class="Aside_subscribe-form-label">Email:<input type="email" placeholder="ejemplo@gmail.com"></label>
			<input class="Aside_subscribe-form-button"type="submit" value="¡Regístrame!">
		</form>
	</div>
</aside>`